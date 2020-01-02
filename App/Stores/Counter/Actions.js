/**
 * Created by rajatdua on 2020-01-02
 */
import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
	incrementCounter: null,
	decrementCounter: null,
	setCounter: ['count'],
});

export const CounterTypes = Types;
export default Creators;
