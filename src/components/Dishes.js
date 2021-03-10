import React,{Component} from 'react';
import data from '../assets/data/dishes.json';
import Restaurant from '@material-ui/icons/Restaurant';
import Dish from './Dish';
import {Button,GridList} from '@material-ui/core'
class Dishes extends Component{
    goBack=e=>{
        e.preventDefault();
        this.props.history.push('/')
    }
render (){
    return(
        <div>
        <h1>Platillos</h1>
        <Button variant="contained" color="secondary" onClick={this.goBack}>
          Regresar
        </Button>
        <GridList>
                {
                    data.dishes.map((dish,index)=>(
                        <Dish key={index} name={dish.name} ingredients={dish.ingredients}/>
                    ))
                }
        </GridList>    
        </div>
    )
}
}
export default Dishes;