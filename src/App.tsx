
import { Provider } from 'react-redux';
import './App.css';
import HomePage from './Components/HomePage/HomePage';
import store from './Redux/store';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
  
      <HomePage/>
    </div>
    </Provider>
  );
}

export default App;
