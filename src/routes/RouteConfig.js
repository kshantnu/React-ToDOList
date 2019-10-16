import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';

import {TodoContainer} from "../modules/todo/components";



const RouteConfig = () => {

   return (
     <Router>
       <Route path="/" exact strict component={TodoContainer}>
       </Route>
     </Router>
   )
}

export default RouteConfig;