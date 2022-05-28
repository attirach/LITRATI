import React from 'react';
import {Image} from "react-bootstrap";
// import ImageCover from './../img/BG-1.png'

const RightSide = () => {
    return (
        <div>
           <Image className={'img-cover'} src="./BG-1.png" thumbnail style={{border:"none"}} /> 
           {/* <img src={ImageCover} width={1280}/> */}
        </div>
    )
}

export default RightSide;