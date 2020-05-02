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
        </div>
    );
};

Hello.defaultProps = {
    // if not passed, these values apply
    compiler: 'COMPILER NOT PASSED ON PROPS',
    framework: 'FRAMEWORK NOT PASSED ON PROPS',
    bundler: 'BUNDLER NOT PASSED ON PROPS',
};
