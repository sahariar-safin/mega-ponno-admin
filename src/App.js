import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import AddProduct from "./componant/Home/AddProduct/AddProduct";
import Home from "./componant/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/addProduct'>
          <Home></Home>
        </Route>
        <Route path='/manageproducts'>
          <Home></Home>
        </Route>
        <Route path='/uploadbanner'>
          <Home></Home>
        </Route>
        <Route path='/orders'>
          <Home></Home>
        </Route>
        <Route exact path='/'>
          <Home></Home>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
