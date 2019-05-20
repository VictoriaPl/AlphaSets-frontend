import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/login/Login'
import Marketplace from './components/marketplace/Marketplace'
import AddData from './components/addData/AddData'
import Profile from './components/profile/Profile'
import Detail from './components/detailData/Detail'

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/signup" component={Signup} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/marketplace" component={Marketplace}/>
    <Route exact path="/addData" component={AddData}/>
    <Route exact path="/profile/:id" component={Profile}/>
    <Route exact path="/detail/:id" component={Detail}/>
  </Switch>
)

export default Router