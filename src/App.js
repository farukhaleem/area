import React, {createContext} from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn';
import Home from './Components/Home';
import PlaceOrder from './Components/PlaceOrder';
import OrderPreview from './Components/OrderPreview';
import TrackOrder from './Components/TrackOrder';
import ChangePassword from './Components/ChangePassword';
import Logout from './Components/Logout';
import NotFound from './Components/NotFound';
import TransitionsModal from './Components/TermsCondition';
import './App.css';

const path = '';
export const DomainPath = createContext(path);

function App() {
  return (
    <DomainPath.Provider value={path}>
      <Router>
        <Switch>
          <Route exact path={`${path}/`} component={Home}/>
          <Route path={`${path}/login`} component={SignIn}/>
          <Route path={`${path}/placeorder`} component={PlaceOrder}/>
          <Route path={`${path}/order_preview`} component={OrderPreview}/>
          <Route path={`${path}/track_order`} component={TrackOrder}/>
          <Route path={`${path}/change_password`} component={ChangePassword}/>
          <Route path={`${path}/logout`} component={Logout}/>
          <Route path={`${path}/sel`} component={TransitionsModal}/>
          <Route path="*" component={NotFound}/>
        </Switch>
      </Router>
    </DomainPath.Provider>
  );
}

export default App;