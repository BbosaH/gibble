import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { HashRouter, Route, Switch } from 'react-router-dom';
import { config } from  'store/redux-store';
import {Provider} from 'react-redux';
import {HashRouter , Switch ,Route } from 'react-router-dom';
import IndexContainer from 'containers/index/index'; 
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';





const store = config();
class App extends Component{
  render(){
    return(

      <HashRouter>
    
        <Provider store={store}>
          <MuiThemeProvider>
            <Switch>
                <Route exact={true} path="/" component={IndexContainer}> </Route>
            </Switch>
          </MuiThemeProvider> 
        </Provider>
     
      </HashRouter>

    )
  }
}


ReactDOM.render(
  <App/>
 
 , 
 document.getElementById('app')
);
