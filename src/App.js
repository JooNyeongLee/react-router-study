import React, { Component } from 'react';
import { Route, BrowserRouter as Router, NavLink } from 'react-router-dom';
import Menu from './Pages/Menu';
import pages from './Pages';


class App extends Component {
  render() {
    return (
      <div>
        헤더!!!
        <Router>
          <Menu/>
          {
            pages.map(({exact,component,path,role})=>{
              if(!role)
              return <Route exact={exact} component={component} path={path} ></Route>
            })
          }
        </Router>
        푸터!!!
      </div>
    );
  }
}

export default App;