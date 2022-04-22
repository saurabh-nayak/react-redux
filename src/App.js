import logo from './logo.svg';
import './App.css';
import store from './redux/store';
import { Provider } from 'react-redux';
import CakeContainer from './components/CakeContainer';
import CookieContainer from './components/CookieContainer';



function App() {
  return (
    <Provider store={store}>
    <div className='App'>
      <CookieContainer/>
    </div>
    </Provider>
  );
}

export default App;
