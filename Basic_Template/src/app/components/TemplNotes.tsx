import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// more or less random notes about webpack setup
export const TemplNotes = (): React.ReactElement<Props> => {
    return (
        <div>
            <br />
            <br />
            <h1>Notes about webpack setup, react, this template (a bit random)</h1>
            <h3>Source maps</h3>
            <ul>
                <li>Whether source maps are generated or not depends on webpack config</li>
                <li>Normally different configurations for css sourcemaps and js</li>
                <li>
                    Normally, no source maps in build (production), but sourcemaps during development (can be changed in
                    webpack)
                </li>
                <li>
                    when not working: check webpack.config or
                    https://blog.sentry.io/2018/10/18/4-reasons-why-your-source-maps-are-broken
                </li>
            </ul>
            <h3>CSS</h3>
            <ul>
                <li>Global css can be achieved via css modules</li>
                <li>- global css via css modules: see example in this template</li>
                <li>
                    - almost certainly other ways to have global templates (at some point necessary when integrating
                    third party lib, but for now its good to only have one approach)
                </li>
            </ul>
            <h3>Configuration</h3>
            <ul>
                <li>
                    see:
                    https://stackoverflow.com/questions/30568796/how-to-store-configuration-file-and-read-it-using-react
                </li>
                <li>Config.testEntry: ???</li>
            </ul>
            <h3>Scalability</h3>
            <ul>
                <li>
                    TODO (mainly lazy load of js files.. check https://webpack.js.org/guides/code-splitting/ (might be a
                    false lead))
                </li>
                <li>
                    Scripts from other sources (example: https://cdnjs.cloudflare.com/someScript.js), use externals:
                    https://symfonycasts.com/screencast/webpack-encore/external-libs
                </li>
            </ul>
            <h3>Global variables (like $ in JQuery)</h3>
            <ul>
                <li>in code. 'import $ from 'jquery';global.$ = $;'</li>
                <li>see: https://symfonycasts.com/screencast/webpack-encore/external-libs</li>
                <li>Not recommended.. avoid it at all cost</li>
            </ul>
        </div>
    );
};
