import {combineReducers} from 'redux';
import searchReducer from './searched';

const allReducers = combineReducers({
    searched: searchReducer
});

export default allReducers;