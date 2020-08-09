import * as React from 'react';
import * as utils from 'app/utils/utils';
import * as state from 'app/components/GlobalState';

setInterval(() => {
    const useableState = state.globalStateRef.accessGlobalState();
    useableState.set((p) => {
        p.someNr = p.someNr * 2;
        return p;
    });
}, 4000);

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {}

export const ReactWrapperExample = (): React.ReactElement<Props> => {
    const globalState = state.globalStateRef.useGlobalState();

    const uiState = state.uiStateRef.useGlobalState();

    return (
        <div>
            <br />
            <br />
            <h3>Test with wrapped state</h3>
            <div>{uiState.get().username}</div>
            <br />
            <br />
            <b>1. Counter value: {globalState.get().someNr}</b> (watch *2 every 4 seconds){' '}
            <button
                onClick={(): void => {
                    globalState.set((p) => {
                        p.someNr = p.someNr + 1;
                        return p;
                    });
                }}
            >
                Increment
            </button>
            <br />
            <b>2. Counter value: {globalState.get().otherNr}</b>
            <button
                onClick={async (): Promise<void> => {
                    await utils.delay((): void => console.log('xxx'), 2000);
                    globalState.set((p) => {
                        p.otherNr = p.otherNr + 3;
                        return p;
                    });
                }}
            >
                Increment by 3 with delay
            </button>
        </div>
    );
};
