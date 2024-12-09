import React from 'react';
import {computerData} from "../data/computers";

let firstFiveImages=computerData.slice(0,5);
const Computers = () => {
  return (

    <>
    <div className="proTitle">
    <h2>Computers</h2>
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


export default Computers
