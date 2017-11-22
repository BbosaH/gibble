
import {createStore, applyMiddleware,combineReducers,compose} from 'redux';
import reduxthunk from 'redux-thunk';
import {ActionLogging,StateLogging} from 'middlewares/logging';

import combinedreducer from "reducers/index"

export const config =(initalState={})=>{


   const store = createStore(combinedreducer,initalState,compose(applyMiddleware(reduxthunk,ActionLogging,StateLogging),window.devToolsExtension?
     window.devToolsExtension() : f=>f));

  return store;
}