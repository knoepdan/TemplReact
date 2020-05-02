import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// more or less random notes about webpack setup
export const SimpleText = (): React.ReactElement<Props> => {
    return <span>I am a simple component</span>;
};

export default SimpleText as React.FC;

/*

This won't work with async

// info if there are no props, just leave out the generic param
export const SimpleText: React.FC<RProps> = (props) => {
    return <span>I am a simple component ({props.test})</span>;
};

interface RProps {
    test: string;
}

SimpleText.defaultProps = {
    // if not passed, these values apply
    test: 'no props passed',
};
*/
