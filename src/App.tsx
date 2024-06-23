
import { Provider } from 'react-redux';
import HomePage from './Components/HomePage/HomePage';
import store from './Redux/store';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HomePage />
      </div>
    </Provider>
  );
}

export default App;
