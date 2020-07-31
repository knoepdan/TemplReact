import { State } from '@hookstate/core';
import { SetStateAction } from 'react';
import { BaseState } from './BaseState';

class NumberState extends BaseState<number>{

    constructor(n : number){
        super(n);
    }
    // overwrite wrapState to offer functions (often not needed, set/get are enough)
    protected wrapState = (s: State<number>) => ({
            get: () => s.value,
            set: (newValue: SetStateAction<number>) => {s.set(newValue)},
            increment: () => s.set(p => p + 1)
    })
}

export const globalNumber : NumberState = new NumberState(0);