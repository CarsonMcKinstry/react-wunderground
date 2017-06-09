const expect = require('expect');
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const actions = require('actions');

const createMockStore = configureMockStore([thunk]);

describe('Actions', () => {
    it('should dispatch SET_LOADING', () => {
        let action = {
            type: 'SET_LOADING'
        }
        let res = actions.setLoading(action);

        expect(res).toEqual(action);
    });

    it('should dispatch ADD_WEATHER', () => {
        let action = {
            type: 'ADD_WEATHER',
            weather: {}
        };
        let res = actions.addWeather(action.weather);

        expect(res).toEqual(action);
    });
});