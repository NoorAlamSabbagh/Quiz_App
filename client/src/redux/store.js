import {combineReducers, configureStore } from '@reduxjs/toolkit';


/** call Reducers**/ 
import questionsReducer  from './questions_reducer';
import resultReducer from './questions_reducer';


const rootReducer = combineReducers({
    questions: questionsReducer,
    result: resultReducer
})

/** create store with reducer **/
export default configureStore({reducer : rootReducer})
