import React from 'react';
import {Form, Button} from 'react-bootstrap';
import './myStyles.css'

const LeftSide = () => {
 return (
     <div>
         <br/>
         <br/>
         <br/>
         <Form style={{width:"80%", marginLeft:"10%", marginTop:"10%"}}>
            <Form.Group >
                 <Form.Label className={'primary font-xl'}>
                     <h2>Selamat datang</h2>
                     <p>Masuk dan dapatkan rekomendasi buku terbaik untukmu.</p>
                 </Form.Label>

             </Form.Group>
             <Form.Group >
                 <Form.Label className={'primary font-xl'}>Enter your email</Form.Label>
                 <Form.Control className={'box'} type="email" placeholder="Enter your email" />
             </Form.Group>
             <Form.Group >
                 <Form.Label className={'primary font-xl'}>Enter your password</Form.Label>
                 <Form.Control className={'box'} type="password" placeholder="Enter your password" />
             </Form.Group>
             <Button className={'btn-masuk'} type="submit">Masuk</Button>
         </Form>
     </div>
 )
}

export default LeftSide;