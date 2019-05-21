import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Marketplace from './components/marketplace/Marketplace'
import AddData from './components/addData/AddData'
import Profile from './components/profile/Profile'
import Detail from './components/detailData/Detail'
import Contact from './components/home/Contact'
import Securiy from './components/home/Security'
import MarketplaceID from './components/marketplace/MarketplaceID'
import Download from './components/buyData/Download';

const Router = ({getTheUser}) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path='/signup' render={() => <Signup getTheUser={getTheUser}/>}/>
    <Route exact path="/login" component={Login} />
    <Route exact path="/marketplace" component={Marketplace}/>
    <Route exact path="/addData/:id" component={AddData}/>
    <Route exact path="/profile/:id" component={Profile}/>
    <Route exact path="/detail/:id" component={Detail}/>
    <Route exact path="/contact" component={Contact}/>
    <Route exact path="/security" component={Securiy}/>
    <Route exact path="/marketplace/:id" component={MarketplaceID}/>
    <Route exact path="/dowload/:id" component={Download}/>
  </Switch>
)

export default Router