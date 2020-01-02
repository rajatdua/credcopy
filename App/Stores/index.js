import { combineReducers } from 'redux';
import configureStore from './CreateStore';
import rootSaga from 'App/Sagas';
import { reducer as CounterReducer } from './Counter/Reducers';

export default () => {
	const rootReducer = combineReducers({
		/**
		 * Register your reducers here.
		 * @see https://redux.js.org/api-reference/combinereducers
		 */
		counter: CounterReducer,
	});

	return configureStore(rootReducer, rootSaga);
};
