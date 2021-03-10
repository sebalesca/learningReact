import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom';
/*importo los componentes que va a manejear este route */
import App from '../App.js';
import Dishes from './Dishes';
import Dish from './Dish';
import Countries from './Countries';
import NotFound from './NotFound'

//creo un componente funcion ya que no va a manipular datos
const Router =()=>(
<BrowserRouter>
    <Switch>
        <Route exact path="/" component={App}/>
        <Route path="/platillos" component={Dishes}/>
        <Route path="/platillo/:name" component={Dish}/>
        <Route path="/countries" component={Countries}/>
        <Route component={NotFound}/>

    </Switch>
</BrowserRouter>

)
export default Router;