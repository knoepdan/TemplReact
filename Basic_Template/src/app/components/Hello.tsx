import * as React from 'react';
import css from './Hello.module.css';

export interface HelloProps {
    compiler: string;
    framework: string;
    bundler: string;
}
export const Hello: React.FC<HelloProps> = (props: HelloProps) => {
    return (
        <div>
            <span className={css.hello}>
                This is a {props.framework} application using {props.compiler} with {props.bundler}{' '}
                (process.env.NODE_ENV: {process.env.NODE_ENV})
            </span>
        </div>
    );
};

Hello.defaultProps = {
    // if not passed, these values apply
    compiler: 'COMPILER NOT PASSED ON PROPS',
    framework: 'FRAMEWORK NOT PASSED ON PROPS',
    bundler: 'BUNDLER NOT PASSED ON PROPS',
};
