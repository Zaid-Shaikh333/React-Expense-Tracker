//import logo from './logo.svg';
import './App.css';
import {Header} from './components/header';
import {Balance} from './components/balance';
import {Transactions} from './components/transactions';
import {AddTransaction} from './components/add-transaction';
import { AppProvider} from './context/AppContext';

function App() {
  return (
    <AppProvider>
      <div>
        <Header/>
        <Balance/>
        <Transactions/>
        <AddTransaction/>
      </div>
    </AppProvider>
  );
}

export default App;
