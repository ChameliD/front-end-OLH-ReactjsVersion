import './App.css';
import ListEployeeComponents from './Components/Employee/ListEployeeComponents';
import FooterComponents from './Components/Footer/FooterComponents';
import HeaderComponents from './Components/Header/HeaderComponents';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import HomeComponents from './Components/Home/HomeComponents';
function App() {
  return (
    <BrowserRouter>
      <div className="app" style={{backgroundImage:"url(./background2.png"}}>
        <HeaderComponents/> 
          <div className='container'>
            <Routes>
          
            <Route exact path='/' element={<HomeComponents />}/>
            <Route exact path='/employeeList' element={<ListEployeeComponents />}/>
         
            </Routes></div>
        </div>
      <FooterComponents/>
    </BrowserRouter>
  );
}


export default App;
