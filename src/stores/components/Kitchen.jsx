import React from 'react';
import {kitchenData} from "../data/kitchen";

let firstFiveImages=kitchenData.slice(0,5);
const Kitchen = () => {
  return (

    <>
    <div className="proTitle">
    <h2>Kitchen</h2>
    </div>
    <div className="proSection">
      {
firstFiveImages.map((items)=>{
    return(
        
        <div className="imgBox">
            <img className="proImage"src={items.image}/>
        </div>
        
    )
})
      }
    </div>
    </>
  )
}


export default Kitchen;