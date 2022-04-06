import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HomeIndex from './Components/Home/Home';
import NavigationBar from "./Navigation/Navigation_Bar";
import './index.css';
import Footer from './Footer/Footer_Bottom';


function App() {
  return (

    <container>
      
    <NavigationBar  />
     
    <HomeIndex />
 
    <Footer/>
    </container>
 
  );
}

export default App;
