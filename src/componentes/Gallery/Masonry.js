import React, {useState} from "react";
import masonry from "masonry-layout";


export default function Masonry( props ){
    var elem = document.querySelector('.gridContainer');
    var msnry = new masonry( elem, {
      // options
      itemSelector: '.gridItem',
      columnWidth: 230
    });
    return(
        <div class="gridContainer" style={{columns: props.columnCount, columnGap: 0}}>
             {props.imagesUrl.map((img,i) =>
                <img src={img} key={i} class="gridItem"className="image" style={{padding: props.gap/2}}/>
            )}
            
        </div>
    )
}

