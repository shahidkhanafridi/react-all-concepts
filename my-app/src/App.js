import logo from './logo.svg';
import './App.css';
import Car from './Car.js';
import ShoppingList from './ShoppingList.js';
import FilterableProductTable from './FilterableProductTable.js';
import Football from './Football.js';
import Goal from './Goal.js'
import Garage from './Garage.js';
import TheGarage from './TheGarage.js';

  
const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
];
const cars = ['Ford', 'BMW', 'Audi'];

function MyButton() {
  return (
    <button>
      I'm a button
    </button>
  );
}

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Car />
      <ShoppingList />
      <FilterableProductTable products={PRODUCTS} />
      <Football />
      <Goal isGoal={true} />
      <Garage cars={cars} showCars={false} />
      <TheGarage />
    </div>
  );
}
