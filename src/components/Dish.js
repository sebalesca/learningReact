import React, { Component,Fragment } from 'react'
import '../styles/Dish.css';
import {Card,CardContent ,List,ListSubheader,ListItem,ListItemIcon, ListItemText} from '@material-ui/core';
import ScatterPlot from '@material-ui/icons/ScatterPlot';
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
   
    render(){      
        
        return (
            <Card className='card'>
                <CardContent>
                    <List
                        component='nav'
                        subheader={
                            <ListSubheader component="div">
                                {this.props.name}
                            </ListSubheader>
                        }
                     >
                         {this.props.ingredients.map((ingredient,index)=>(
                             <ListItem button key={index} alignItems="flex-start">
                                 <ListItemIcon>
                                     <ScatterPlot/>
                                 </ListItemIcon>
                                 <ListItemText inset primary={ingredient}/>
                             </ListItem>
                         ))}
                     </List>
                </CardContent>
            </Card>
            
        )
    }

}
export default Dish;
