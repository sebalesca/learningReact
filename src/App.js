import './styles/App.css';
import Header from './components/Header';
import Dish from './components/Dish';
import NewDish from './components/NewDish';
function App() {
  
  const dish='tacos'
  return (
    <div className="App">
      <Header/>
      <Dish name={dish}/>
      <NewDish/>
    </div>
  );
}

export default App;
