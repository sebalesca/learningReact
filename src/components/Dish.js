import React, { Component,Fragment } from 'react'
import '../styles/Dish.css';
import Button from '@material-ui/core/Button';

export class Flag extends Component {
    
    render(){
        
        return (
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }

}
export class Ingredient extends Component {
    render(){
        return (
            /**cuando no necesito que tenga un div de separacion uso fragment 
             * esto hace que cree el hijo dentro del div del cual se llama
             */
            <Fragment>
                <h4>Ingredientes</h4>
            </Fragment>
        )
    }
}
class Dish extends Component {
    ingredients =['cebolla','palta','ajo']
    countIgredients (){
        return this.ingredients.length;
    }
    render(){      

        return (
            <div className="dish">
                <h1>{this.props.name}</h1>
                <h2>{this.countIgredients()}</h2>                
                <ul>
                    {this.ingredients.map((ingredient,index)=>(
                        <li key={index}>
                            {ingredient}
                        </li>
                    ))
                }
                </ul>
                <Button variant="contained" color="primary">Elegir</Button>
                
            </div>
        )
    }

}
export default Dish;
