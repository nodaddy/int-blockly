import logo from './logo.svg';
import './App.css';
import Classroom from './components/Classroom';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <Classroom/>
    </Provider>
  );
}

export default App;
