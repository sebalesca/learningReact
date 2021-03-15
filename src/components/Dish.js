import React, { Component,Fragment } from 'react'
import '../styles/Dish.css';
import {Card,CardContent,IconButton ,List,ListSubheader,ListItem,ListItemIcon, ListItemText, TextField} from '@material-ui/core';
import {ScatterPlot,Edit} from '@material-ui/icons';

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
   state={
    edit:false,
    name:this.props.name
   }
   edit =e=>{
    this.setState({edit:!this.state.edit})
   }
   handleChange=e=>{
       /**
        * hago una copia del estado para manipularlo
        */
       let newState={...this.state}
       newState.name=e.currentTarget.value;
       this.setState(newState);
       /*aca debo elevar los cambios al contenedor padre mediante un método
        enviandole quien es (index) y el nuevo valor del name 
       */
        this.props.onUpdateDish(this.props.index,newState.name)
   }
    render(){      
        
        return (
            <Card className='card'>
                <CardContent>
                    <List
                        component='nav'
                        subheader={
                            <ListSubheader component="div">
                                {this.state.edit? (
                                    <TextField
                                        label='Platillos...'
                                        type='text'
                                        margin='normal'
                                        variant='outlined'
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                ):(this.state.name
                                )}
                            <IconButton size='sm' onClick={this.edit}>
                                <Edit/>
                            </IconButton>    
                            </ListSubheader>
                        }
                     >
                         {this.props.ingredients.map((ingredient,index)=>(
                             <ListItem button key={index}>
                                 <ListItemIcon>
                                     <ScatterPlot/>
                                 </ListItemIcon>
                                 <ListItemText  primary={ingredient}/>
                             </ListItem>
                         ))}
                     </List>
                </CardContent>
            </Card>
            
        )
    }

}
export default Dish;
