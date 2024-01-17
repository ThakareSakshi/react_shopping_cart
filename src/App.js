import logo from './logo.svg';
import './App.css';
import CardItems from './Components/CardItems';
import ShoopingCards from './Components/ShoopingCards';
import {ShoppingList} from './context/ShoppingItemsContext';

function App() {
  return (
    <div className="App">
     <h1 className='font-bold text-4xl'>Shopping List</h1>
  
  <ShoppingList>
 <div className='flex gap-3 w-full '>
 <ShoopingCards/>
    
    <CardItems/>
 </div>
  </ShoppingList>
  
    </div>
  );
}

export default App;
