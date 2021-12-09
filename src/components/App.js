import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import HomeControl from '../pages/HomeControl';
import '../App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import { Home } from '@material-ui/icons';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomeControl/>} />
        <Route exact path="/sign-in" element={<SignIn/>} />
        <Route exact path="/sign-up" element={<SignUp/>} />
          {/* <SignIn/> */}
        {/* </Route> */}
        {/* <Route path="/sign-up">
          Signup
        </Route>
        <Route path="/about">
          About
        </Route>
        <Route path="/contact">
          Contact
        </Route> */}
      </Routes>
    </Router>
  );
}

export default App;
