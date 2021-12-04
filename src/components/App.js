import React from 'react';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<SignIn/>} />
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
