import * as React from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

// more or less random notes about webpack setup
export const SimpleText = (): React.ReactElement<Props> => {
    return <span>I am a simple component</span>;
};

export default SimpleText as React.FC;
