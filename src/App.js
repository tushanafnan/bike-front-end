import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Error from './Components/Error/Error';
import Privacy from './Components/Privacy/Privacy';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import Header from './Components/Header/Header';
import Login from './Components/Login/Login';
import Signup from './Components/Signup/Signup';
import AuthProvider from './Components/context/AuthProvider';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import ManageOrder from './ManageOrder/ManageOrder';
import NewService from './Components/NewService/NewService';
import Orders from './Components/Orders/Orders';
import MyOrders from './Components/MyOrders/MyOrders';
import Explore from './Explore/Explore';
import ManageProducts from './ManageProducts/ManageProducts';
import MakeAdmin from './../src/MakeAdmin/MakeAdmin';
import Pay from './Pay/Pay';
import Review from './Review/Review';

function App() {
  return (
    <div>

<AuthProvider>
<Router>
  <Header></Header>
          <Switch>
            <Route exact path="/">
      <Home></Home>
            </Route>
            <Route path="/home">
           <Home></Home>
            </Route>
            <Route path="/login">
           <Login> </Login>
            </Route>
            <Route path="/signup">
           <Signup></Signup>
            </Route>
            <Route path="/about">
             <About></About>
         </Route>
            <Route path="/contact">
              <Contact></Contact>
         </Route>
            <Route path="/privacy">
              <Privacy></Privacy>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrders></MyOrders>
            </PrivateRoute>
            <PrivateRoute path="/manageorder">
              <ManageOrder></ManageOrder>
            </PrivateRoute>
            <PrivateRoute path="/newservice">
             <NewService></NewService>
            </PrivateRoute>
            <PrivateRoute path="/orders">
             <Orders></Orders>
            </PrivateRoute>
            <PrivateRoute path="/explore">
            <Explore></Explore>
            </PrivateRoute>
            <PrivateRoute path="/manageproducts">
            <ManageProducts></ManageProducts>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
            <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/pay">
            <Pay></Pay>
            </PrivateRoute>
            <PrivateRoute path="/review">
            <Review></Review>
            </PrivateRoute>
            
            <Route path="*">
              <Error></Error>
            </Route>
           
          </Switch>
        </Router>
</AuthProvider>





    </div>
  );
}

export default App;
