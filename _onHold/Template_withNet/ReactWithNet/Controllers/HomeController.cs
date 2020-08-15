using System;
using System.Linq;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Hosting;
using ReactWithNet.Models;
using Microsoft.AspNetCore.Mvc.TagHelpers;

namespace ReactWithNet.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        private readonly IHostingEnvironment _env;

        public HomeController(IHostingEnvironment env, ILogger<HomeController> logger)
        {
            _env = env;
            _logger = logger;
        }

        public IActionResult Index()
        {
            var model = this.GetSpaModel();


            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        public SpaModel GetSpaModel()
        {
            var model = new SpaModel();

            var relativeDistFolder = "wwwroot/dist";
            var rootPath = this._env.ContentRootPath; // C:\Dev\Github\TemplReact\Template_withNet\ReactWithNet
            var distFolder = new System.IO.DirectoryInfo(System.IO.Path.Combine(rootPath, relativeDistFolder));
            

            var cssFiles = distFolder.GetFiles("*.css", System.IO.SearchOption.TopDirectoryOnly);
            var jsFiles = distFolder.GetFiles("*.js", System.IO.SearchOption.TopDirectoryOnly);

            foreach(var css in cssFiles)
            {
                string webRef = GetDistNameReference(css);
                model.CssRefs.Add(webRef);
            }

            // js
            foreach (var js in jsFiles.Where(x => !x.Name.StartsWith("app.") && !x.Name.StartsWith("vendor.")))
            {
                // dont load lazy load stuff
                var nameWithoutEnding = System.IO.Path.GetFileNameWithoutExtension(js.Name);
                if (nameWithoutEnding.Contains('.'))
                {
                    continue;
                }


                // normal stuff
                string webRef = GetDistNameReference(js);
                model.JsRefs.Add(webRef);
            }

            foreach (var js in jsFiles.Where(x => x.Name.StartsWith("vendor.")))
            {
                string webRef = GetDistNameReference(js);
                model.JsRefs.Add(webRef);
            }
            foreach (var js in jsFiles.Where(x => x.Name.StartsWith("app.")))
            {
                string webRef = GetDistNameReference(js);
                model.JsRefs.Add(webRef);
            }




            return model;
        }
        private static string GetDistNameReference(string name)
        {
            return "dist/" + name;
        }
        private static string GetDistNameReference(System.IO.FileInfo file)
        {
            return GetDistNameReference(file.Name);
        }
    }
}
