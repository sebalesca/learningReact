import React,{Component} from 'react';
import Dish from './Dish';
import {Button,GridList} from '@material-ui/core'
class Dishes extends Component{

    goBack=e=>{
        e.preventDefault();
        this.props.history.push('/')
    }

    UpdateDish=(index,updateName)=>{
        //sigo elevando la actualizacion al componente app 
        //mediante las props
        this.props.onUpdateDish(index,updateName);
    }


    render (){
    return(
        <div>      
        <GridList>
                {
                    this.props.data.map((dish,index)=>(
                        <Dish key={index} 
                        name={dish.name} 
                        ingredients={dish.ingredients} 
                        index={index}
                        //envio la prop que es un metodo para la comunicacion del hijo
                        onUpdateDish={this.UpdateDish}
                        />
                    ))
                }
        </GridList>    
        </div>
    )
}
}
export default Dishes;