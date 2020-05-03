// include css in top component in correct order (to mimick a global css)
// styles have to be applied value. Example:  className={macroCss.pt2}
import normCss from 'app/style/global.normalize.module.css';
import macroCss from 'app/style/global.macros.module.css';
import defaultCss from 'app/style/global.module.css';

// app
import { Config } from 'app/utils/Config';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from 'app/components/Hello';
import { TemplNotes } from './app/components/TemplNotes';
import { ReactHooksExample } from 'app/components/ReactHooksExample';
import { ReactWrapperExample } from 'app/components/ReactWrapperExample';
import { ImageExample } from 'app/components/ImageExample';
import { AsyncLoadEx } from './app/components/AsyncLoadEx';

// hack to ensure css that is to be global is loaded and no type errors
if (false && normCss && macroCss && defaultCss) {
    console.log('');
}

Config.loadConfigFile(true)
    .then((r) => {
        ReactDOM.render(
            <div className={macroCss.solidBox + ' ' + macroCss.m5 + ' ' + macroCss.p10}>
                <Hello compiler="Typescript" framework="React..." bundler="Webpack" />
                <ReactHooksExample />
                <br />
                <ReactWrapperExample />
                <br />
                <ImageExample></ImageExample>
                <div className={macroCss.dottedBox + ' ' + macroCss.p10 + ' ' + macroCss.m5}>
                    <AsyncLoadEx></AsyncLoadEx>
                </div>
                <TemplNotes></TemplNotes>
                <div className="dottedBoxBlaWillNotWorkBecauseCssIsCompiledAndNamesAreChanged"></div>
            </div>,
            document.getElementById('root'),
        );
    })
    .catch((ex) => {
        alert('Error loading configuration: ' + ex.message);
        console.error('Error loading config: ' + ex.message);
    });
