import React, {Component} from 'react';
import './styles/App.css';
import Header from './components/Header';
import Dish from './components/Dish';
import NewDish from './components/NewDish';
import Button from '@material-ui/core/Button';
class App extends Component {
  showDish =(e)=>{
    e.preventDefault();
    this.props.history.push('/platillos');

  }
  render(){
    return (
      <div className="App">
        <Header/>
        {/* <Dish name={dish}/> */}
        <NewDish/>
        <Button variant="contained" color="secondary" onClick={this.showDish}>
          Elegir
        </Button>
      </div>
    );
  }
  
}

export default App;
