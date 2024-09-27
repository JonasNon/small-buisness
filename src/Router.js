import React from 'react'
import { Routes, Route, Navigate } from 'react-router'
import cookie from 'cookie'

import AddNew from './containers/Dashboard'
import Details from './containers/Details'
import Listings from './containers/Listings'
import SignIn from './containers/SignIn'

const checkAuth = () => {
  const cookies = cookie.parse(document.cookie);
  return cookies["loggedIn"] ? true : false;
};


const ProtectedRoute = ({component: Component, ...rest}) => {
  return (
      checkAuth() ?
      <Component {...rest} /> :
      <Navigate to='/SignIn'/>
  )
}

const Router = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Listings/>} />
            <Route path="/AddNew" element={<ProtectedRoute component={AddNew}/>}/>
            <Route path="/Details" element={<Details/>} />
            <Route path="/SignIn" element={<SignIn/>} />
        </Routes>
    );
};

export default Router;