import React, { Children, Fragment, useState } from 'react';
import Login from './Screens/Login';
import Home from './Screens/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes,
} from "react-router-dom";


function App() {



  return (
    <Router>
      <Routes>
        <Route exact path='/' element={ <Login />} />
        <Route exact path='/Home' element={<Home />} />
      </Routes>
    </Router>
  );
}



export default App;
