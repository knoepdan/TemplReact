// include css in top component in correct order (to mimick a global css)
// styles have to be applied value. Example:  className={macroCss.pt2}
import normCss from 'app/style/global.normalize.css';
import macroCss from 'app/style/global.macros.css';
import defaultCss from 'app/style/global.css';

// app
import { Config } from 'app/utils/Config';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Hello } from './app/components/Hello';
import { AsyncLoadEx } from './app/components/AsyncLoadEx';
import { TemplNotes } from './app/components/TemplNotes';

import samplePng from 'app/img/samplePng.png';
import sampleJpg from 'app/img/sampleJpg.jpg';
import sampleGif from 'app/img/sampleGif.gif';
import sampleSvg from 'app/img/sampleSvg.svg';

const imgStyle = {
    maxHeight: '40px',
    border: '5px solid pink',
};

// hack to ensure css that is to be global is loaded and no type errors
if (false && normCss && macroCss && defaultCss) {
    console.log('');
}

Config.loadConfigFile(true)
    .then((r) => {
        console.log('Pre render! config loaded: ' + Config.isLoaded);
        ReactDOM.render(
            <div className={macroCss.solidBox + ' ' + macroCss.m5 + ' ' + macroCss.p10}>
                <Hello compiler="Typescript" framework="React..." bundler="Webpack" />
                <br />
                <div className={macroCss.dottedBox + ' ' + macroCss.p10 + ' ' + macroCss.m5}>
                    <AsyncLoadEx></AsyncLoadEx>
                </div>
                <div className="dottedBoxBlaWillNotWorkBecauseCssIsCompiledAndNamesAreChanged">
                    <img src={samplePng} alt="samplePng" />
                    <img src={sampleJpg} alt="sampleJpg" />
                    <img src={sampleGif} alt="sampleGif" style={{ maxHeight: '39px' }} />
                    <img src={sampleSvg} alt="sampleSvg" style={imgStyle} />
                </div>
                <TemplNotes></TemplNotes>
            </div>,
            document.getElementById('root'),
            () => {
                console.log('render callback called. Config loaded: ' + Config.isLoaded);
            },
        );
    })
    .catch((ex) => {
        alert('Error loading configuration: ' + ex.message);
        console.error('Error loading config: ' + ex.message);
    });
