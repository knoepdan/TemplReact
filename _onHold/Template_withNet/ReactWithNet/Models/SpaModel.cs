using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ReactWithNet.Models
{
    public class SpaModel
    {
        /// <summary>
        /// Css references in correct order
        /// </summary>
        public IList<string> CssRefs { get; set; } = new List<string>();

        /// <summary>
        /// Javascript file references in correct order
        /// </summary>
        public IList<string> JsRefs { get; set; } = new List<string>();

        public string BaseUrl { get; set; }

    }
}
