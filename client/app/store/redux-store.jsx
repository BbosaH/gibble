
import {createStore, applyMiddleware,combineReducers,compose} from 'redux';
import reduxthunk from 'redux-thunk';
import {ActionLogging,StateLogging} from 'logging';

import combinedreducer from "combined_reducer"

export const config =(initalState={})=>{


   const store = createStore(combinedreducer,initalState,compose(applyMiddleware(reduxthunk,ActionLogging,StateLogging),window.devToolsExtension?
     window.devToolsExtension() : f=>f));

  return store;
}