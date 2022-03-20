import React from "react";
import styles from './Gallery.css'
import masonry from "masonry-layout";
import { useState } from 'react/cjs/react.production.min';
import Masonry from "./Masonry.js";

import img1 from '../../assets/images/img1.jpg'
import img2 from '../../assets/images/img2.jpg'
import img3 from '../../assets/images/img3.jpg'
import img4 from '../../assets/images/img4.jpg'
import img5 from '../../assets/images/img5.jpg'
import img6 from '../../assets/images/img6.jpg'
import img7 from '../../assets/images/img7.jpg'
import img8 from '../../assets/images/img8.jpg'

const imageUrls =[
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
   
];
 export default function Gallery(props) {
    
    return(
         <div>
             <Masonry imagesUrl={imageUrls} columnCount="4" gap="5"></Masonry>
         </div>
     );


 }
