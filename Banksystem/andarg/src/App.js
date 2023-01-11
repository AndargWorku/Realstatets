import {BrowserRouter as Router,Route,Routes} from "react-router-dom"

import './App.css';

import Home from "./pages";
import SigninPage from "./pages/Signin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' component={Home} exact/>
        <Route path='/signin' component={SigninPage} exact/>
      </Routes>
      <Home/>
    </Router>
  );
}

export default App;
