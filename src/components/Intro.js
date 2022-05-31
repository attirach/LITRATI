
// import { Button } from "bootstrap"
import {Container, Col, Row, Button} from "react-bootstrap"
import SearchBar from "./SearchBar"
import BookData from"../data/Data-book.json"
import SearchIcon from "@material-ui/icons/Search";
import CloseIcon from "@material-ui/icons/Close";

const intro = () => {
  return (
   <div className='welcome'>
   <Container className='text-white text-center d-flex justify-content-center
   align-item-center'>
     <Row>
       <Col>
       <div className='title'>Temukan Rekomendasi</div>
       <div className="title">Buku Bacaan Untuk Kamu</div>
       <div>
         <SearchBar />  
       </div>
       {/* <div className="introButton mt-4 text-center">
           <Button className="btn-ardhi">
               KNTL
           </Button>
           </div>
       <div className="introButton mt-4 text-center">
           <Button variant="dark">
               Lihat Sini AJG
           </Button>
           </div> */}
       </Col>
     </Row>
   </Container>
 </div>
  )
}

export default intro