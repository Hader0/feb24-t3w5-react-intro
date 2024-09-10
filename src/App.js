import logo from './logo.svg';
import './App.css';

const food = [
  "bananas",
  "bacon",
  "pizza",
  "mango",
  "nachos",
  "KFC",
  "sushi",
  "enchilada"
]

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>

      <ul>
        {
          food.map(individualFoodItem => {
            return <li>
              {individualFoodItem}
            </li>
          })
        }
      </ul>

    </div>
    
  );
}

export default App;
