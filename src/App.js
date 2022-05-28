import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.css"
import {Button, Alert, Row, Col} from 'react-bootstrap';
import Menu from './components/Menu';
import LeftSide from './components/LeftSide';
import RightSide from './components/RightSide';
import Stylesheet from './components/Stylesheet';
import inline from './components/inline';  

function App() {
  return (
    <div className="App">
      <Menu />
      {/* <Stylesheet primary='true' /> */}
      {/* <inline /> */}
      <Row className='landing col-7-3-gap'>
        <Col><RightSide /></Col>
        <Col><LeftSide/></Col>
        
      </Row>
    </div>
  );
}

export default App;
