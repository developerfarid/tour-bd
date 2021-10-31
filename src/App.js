import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Admin from './components/Admin/Admin';
import Headers from './components/Headers/Headers';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Login from './components/Login/Login';
import AllContextProvider, { AllContext } from './components/Context/AllContextProvider';
import Tour from './components/Tour/Tour';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Footer from './components/Footer/Footer';
import MyOrder from './components/MyOrder/MyOrder';
import Contact from './components/Contact/Contact';
import WeOffer from './components/WeOffer/WeOffer';

function App() {
  return (
    <div>
      <AllContextProvider>
      <Router>
        <Headers />
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route  path='/home'>
            <Home />
          </Route>
          <Route path='/admin'>
            <Admin />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/myorder'>
            <MyOrder />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
          <Route path='/weoffer'>
            <WeOffer />
          </Route>
          <PrivateRoute path='/productinfo/:id'>
            <Tour />
          </PrivateRoute>
          </Switch>
          <Footer />
      </Router>
      </AllContextProvider>
    </div>
  );
}

export default App;
