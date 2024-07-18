import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/home'
import NavbarPage from './Components/Navbar/navbar'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import Footer from './Components/Footer/footer';
import Homecards from './Components/Home-cards/Home-cards';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
   <Home/>
   <Homecards/>
   <Footer/>
      
    </div>
  );
}

export default App;
