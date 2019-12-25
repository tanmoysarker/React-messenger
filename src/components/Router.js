import React from 'react';
import Messenger from './Messenger';
import SignInSlide from './SignInSlide'
import SignUpSlide from './SignUpSlide'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

const Router =()=> {
    return (
        <BrowserRouter>
         <Switch>
            <Route path='/' exact component={SignInSlide}/>
            <Route path='/signup' exact component={SignUpSlide}/>
            <Route path='/home' exact component={Messenger}/>
            <Route path='/'  render={()=> <div>404</div>}/>
         </Switch>
        </BrowserRouter>
    )
}

export default Router;