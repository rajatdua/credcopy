/**
 * Created by rajatdua on 2020-01-02
 */
import 'react-native';
import { Provider } from 'react-redux';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import CounterScreen from '../App/Containers/Counter/CounterScreen';
import {getStore} from './utility';

describe('<CounterScreen />', function () {
    it('renders correctly', async () => {
        renderer.create(
            <Provider store={getStore({
                counter: {
                    count: 0
                },
            })}>
                <CounterScreen />
            </Provider>);
    });
});
