import React from 'react';
import {acData} from "../data/ac";

let firstFiveImages=acData.slice(0,5);
const AirCondition= () => {
  return (

    <>
<div className="proTitle">
    <h2>Air Conditioner</h2>
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


export default AirCondition;
