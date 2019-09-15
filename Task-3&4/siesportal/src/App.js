import React,{Component} from 'react';
import Home from './Main/Home/Home';
import './App.css';
import Profile from './Main/Profile/Profile';
import SideDrawer from './Header/SideDrawer/SideDrawer';
import Login from './Login/Login';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Header from './Header/Header';
import Railway from './Main/Railway/Railway';
import Register from './Login/Register/Register'
import Signin from './Login/Signin/Signin';
import Office from './Main/Office/Office';
import Course from './Main/Course/Course';
import Examcell from './Main/Examcell/Examcell';
import Footer from './Footer/Footer';

class App extends Component  {
 
    constructor(props) {
      super(props);
      this.state = {
        showComponent: false,
      };
    }
  
    render() {
      return (
        <BrowserRouter>
        <div>
          <Header/>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/profile" component={Profile} />
            <Route path='/course' component={Course}/>
            <Route path="/examcell" component={Examcell} />
            <Route path="/office" component={Office} /> 
            <Route path="/railway" component={Railway} />
            <Route path="/logout" component={Login} />
            <Route path="/signin" component={Signin} />
            <Route path="/register" component={Register} />




            <Route component={Error} />
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
     

      );
    }
  }

 

export default App;
