
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./Style/LandingPage.css"
import Recommendation from "./components/Recommendation"
import Intro from "./components/Intro"
import {Container, Col, Row, Button} from "react-bootstrap"
import SearchBar from './components/SearchBar';
import BookData from "./data/Data-book.json"
import "./Style/SearchBar.css"




function App() {
  return (
   <div>
     {/* <Row>
       <Col>
          <div className='bg-black'>
              <NavigationBar />
          </div>
          
       </Col>
     </Row>

     <Row className='rows-4'>
       <Col>
          <div className='myBG'>
              <Intro />    
              <div className=''>
                
              </div>
          </div>
          <div className='recommendation'>
            <Recommendation />
          </div>
       </Col>
     </Row> */}

      <div className='myBG'>
          <NavigationBar />
          <Intro />
      </div>

      <div className='recommendation'>
            <Recommendation />
      </div>
   </div>
  )
}

export default App;
