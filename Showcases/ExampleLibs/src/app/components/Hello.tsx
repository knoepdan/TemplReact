import * as React from 'react';

export interface HelloProps {
    compiler: string;
    framework: string;
    bundler: string;
}
export const Hello: React.FC<HelloProps> = (props: HelloProps) => {
    return (
        <div>
            This is a {props.framework} application using {props.compiler} with {props.bundler} (process.env.NODE_ENV:{' '}
            {process.env.NODE_ENV})
            <div>
                react router and Typescript (sometimes be painful)
                <br />
                For example: <br />
                <ul>
                    <li>
                        Passing props (rarely needed. Often global state or passing param is the better options): <br />
                        Easiest solution I have found: WrapperComponent (as in this example, couldnt get typing to work)
                    </li>
                    <li>
                        Passing params: see some links
                        <br />
                    </li>
                </ul>
                Some react-router links:
                <ul>
                    <li>https://itnext.io/a-react-router-from-scratch-in-typescript-f0eec6ccb293</li>
                    <li>
                        https://medium.com/@robjtede/the-real-routewithprops-react-component-in-typescript-defacde01991
                    </li>
                    <li>https://programming.vip/docs/using-typescript-to-write-react-router-5.html</li>
                    <li>https://stackoverflow.com/questions/44118060/react-router-dom-with-typescript</li>
                    <li>https://www.youtube.com/watch?v=3pS-oRn9LTk</li>
                </ul>
            </div>
        </div>
    );
};

Hello.defaultProps = {
    // if not passed, these values apply
    compiler: 'COMPILER NOT PASSED ON PROPS',
    framework: 'FRAMEWORK NOT PASSED ON PROPS',
    bundler: 'BUNDLER NOT PASSED ON PROPS',
};
