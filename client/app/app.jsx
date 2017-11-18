import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import { config } from  'redux_store';
import {Provider} from 'react-redux';





const store = config();
class App extends Component{
  render(){
    return(

    	<div>Hello div</div>
        /*<Switch>
          <Route exact={true} path="/" component={IndexContainer}> </Route>
          <Route exact={true} path="/home" component={HomeContainer}> </Route>
          <Route exact={true} path="/shareDash" component={ShareKnowlegeOptions}> </Route>
        </Switch>*/
    
    )
  }
}


ReactDOM.render(
  
    <Provider store={store}>
      <App />
    </Provider>
 
 , 
 document.getElementById('app')
);
