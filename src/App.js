import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import HomeIndex from './Components/Home/Home';
import NavigationBar from "./Navigation/Navigation_Bar";

import './index.css';
import Footer from './Footer/Footer_Bottom';

function App() {
  return (

    <Container fluid >
        <div className="navigation">   
        <NavigationBar sticky="top" />
    </div>
    <HomeIndex />
    <Footer/>
    </Container>
 
  );
}

export default App;
