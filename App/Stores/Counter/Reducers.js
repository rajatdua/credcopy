/**
 * Created by rajatdua on 2020-01-02
 */
import { createReducer } from 'reduxsauce';
import { INITIAL_STATE } from './InitialState';
import { CounterTypes } from './Actions';

export const incrementCounter = (state) => ({
	...state,
	count: state.count + 1,
});
export const decrementCounter = (state) => ({
	...state,
	count: state.count - 1,
});
export const setCounter = (state, { count }) => ({
	...state,
	count,
});
export const reducer = createReducer(INITIAL_STATE, {
	[CounterTypes.INCREMENT_COUNTER]: incrementCounter,
	[CounterTypes.DECREMENT_COUNTER]: decrementCounter,
	[CounterTypes.SET_COUNTER]: setCounter,
});
