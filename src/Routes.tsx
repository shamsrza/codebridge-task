import React from 'react';
import { Switch ,Route } from 'react-router-dom';

import Home from './pages/Home/Home';
import Article from './pages/Article/Article';


const Routes =()=>(
<Switch>
    {/* render all routes here*/}
    <Route exact path="/" component = {Home}/>
    <Route path="/article/:name" component = {Article}/>
</Switch>  

)


export default Routes

