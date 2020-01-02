/**
 * Created by rajatdua on 2020-01-02
 */
import configureStore from 'redux-mock-store';
const mockStore = configureStore([]);
export const getStore = (state) => {
    return mockStore(state);
};
