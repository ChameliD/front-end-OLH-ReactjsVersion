import './App.css';
import ListEployeeComponents from './Components/Employee/ListEployeeComponents';
import FooterComponents from './Components/Footer/FooterComponents';
import HeaderComponents from './Components/Header/HeaderComponents';

function App() {
  return (
    <div className="container">
      <HeaderComponents/>
      <ListEployeeComponents/>
      <FooterComponents/>
      
    </div>
  );
}

export default App;
