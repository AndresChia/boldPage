import React, { Fragment } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import LeaderBoard from "./Components/LeaderBoards/index"



const Nav = () => (
  <BrowserRouter>
    <Fragment>
      <Route exact path="/" component={LeaderBoard}></Route>
      {/* {false && <Redirect to="/Home"/>} */}
    </Fragment>
  </BrowserRouter>
)

export default Nav;
