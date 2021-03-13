import React, {Component} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Dish from './components/Dish';
import NewDish from './components/NewDish';
import Button from '@material-ui/core/Button';
import data from './assets/data/dishes.json';
import Dishes from './components/Dishes';
class App extends Component {
  /* creo el estado para la app */
  state={
    dish:'tacos',
    dishes:data
  }
  showDish =(e)=>{
    e.preventDefault();
    this.props.history.push('/platillos');

  }
  updateDish=(index,updateName)=>{
    //guardo una copia para manipular el estado
    let newState={...this.state};
    //asigno segun la posicion el valor del nombre
    newState.dishes[index].name=updateName;
    this.setState(newState);
  }
  addDish=(nameDish)=>{
    //como debo acceder al estado uso una arrow function
        //guardo una copia para manipular el estado
        let newState={...this.state};
        const newDish={
          "id": newState.dishes.length,
          "name": nameDish,
          "country": "España",
          "ingredients": ["Arroz", "Azafrán", "Tomate", "Mariscos", "Ajo", "Aceite"]
        }     
        newState.dishes.push(newDish);
        this.setState(newState);
  }
  render(){
    console.log(this.state.dishes)
    return (
      <div className="App">
        <Header/>
        {/* <Dish name={dish}/> */}
        <NewDish onAddDish={this.addDish}/>
        <Dishes data={this.state.dishes} 
        onUpdateDish={this.updateDish}
        />
      
      </div>
    );
  }
  
}

export default App;
