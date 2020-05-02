// include css in top component in correct order (to mimick a global css)
// styles have to be applied value. Example:  className={macroCss.pt2}
import normCss from 'app/style/global.normalize.css';
import macroCss from 'app/style/global.macros.css';
import defaultCss from 'app/style/global.css';

// app
import { Config } from 'app/utils/Config';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import { Hello } from 'app/components/Hello';
import { TemplNotes } from './app/components/TemplNotes';
/*
import { ReactHooksExample } from 'app/components/ReactHooksExample';
import { ReactWrapperExample } from 'app/components/ReactWrapperExample';
import { AsyncLoadEx } from './app/components/AsyncLoadEx';
*/

// hack to ensure css that is to be global is loaded and no type errors
if (false && normCss && macroCss && defaultCss) {
    console.log('');
}

export const HelloWrapper: React.FC = () => {
    // to get the typings right with react-router and props (here framework/bundler/we) it is probably easiest to just write a wrapper
    return <Hello framework="react" bundler="webpack" compiler="typescript"></Hello>;
};

Config.loadConfigFile(true)
    .then((r) => {
        // Info regarding react-rounter
        // - <Rout path="/" exact  -> without exact the path matches with a startwith logic. So normally, path="/" is used with exact.
        // - <Switch - ensures only one component (the first one matching the path ) is returned
        ReactDOM.render(
            <div className={macroCss.p2}>
                <BrowserRouter>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Hello React-Router</Link>
                            </li>
                            <li>
                                <Link to="/notes">Notes</Link>
                            </li>
                        </ul>
                    </nav>
                    <div className={macroCss.solidBox + ' ' + macroCss.p10}>
                        <Switch>
                            <Route path="/" exact component={HelloWrapper}></Route>
                            <Route path="/notes" component={TemplNotes}></Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>,
            document.getElementById('root'),
        );
    })
    .catch((ex) => {
        alert('Error loading configuration: ' + ex.message);
        console.error('Error loading config: ' + ex.message);
    });
