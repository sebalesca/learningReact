import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
class Countries extends Component{
    getCountries(){
        fetch('https://restcountries.eu/rest/v2/all')
        .then(response=>response.json())
        .then(data=>console.log(data))
        .catch(error=>console.log(error))
    }
render(){
    return(
        <div>
            <h1>Paíes</h1>
            <Button variant='contained' color='secondary' onClick={this.getCountries} >Cargar Lista</Button>
        </div>
    )
}
}
export default Countries;