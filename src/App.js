import './App.css';
import Header from './components/header/header';
import Landing from './components/landing/landing';
import Customers from './customers/customer';

function App() {
  return (
    <div className="app">
      <Landing />
      <Customers />
    </div>
  );
}

export default App;
