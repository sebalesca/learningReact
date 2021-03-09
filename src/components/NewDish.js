import React, { Component } from 'react'
import {Fab,TextField} from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add';
class NewDish extends Component {
    //puedo ligar de varias maneras
    //con una arrow function o en el constructor con un bind
/* constructor(){
    super();
    this.handleClick  = this.handleClick.bind(this);
} */

//se hace el uso de referencias para obtener el valor de algo
NewDish= React.createRef()

handleClick=e=>{
    //evita que se envie por defecto 
    e.preventDefault();
    //para acceder directamente a la refercia
    console.log(this.newDish.value);
    
}
render(){
    console.log(this);
    return (
        <form autoComplete='off'> 
            <TextField
                label='Platillo'
                type='text'
                margin='normal'
                variant='outlined'
                inputRef={e=>(this.newDish=e)/* en formma de arrow function */}
            />
            <Fab
                color='primary'
                size='medium'
                className='dish-form-icon'
                onClick={this.handleClick}>
                <AddIcon/>
                </Fab>            
            
        </form>
    )
}
}
export default NewDish;
