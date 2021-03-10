import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
class Dishes extends Component{
    goBack=e=>{
        e.preventDefault();
        this.props.history.push('/')
    }
render (){
    return(
        <div>
            <h1>Platillos</h1>
            <Button variant='contained' color='secondary' onClick={this.goBack}>Go Back</Button>
        </div>
    )
}
}
export default Dishes;