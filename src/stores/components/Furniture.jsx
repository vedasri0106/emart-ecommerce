import React from 'react'
 import {furnitureData} from "../data/furniture"

 const Furniture = () => {
const firstFiveImages=furnitureData.slice(0,5);
   return (

    <>
    <div className="proTitle">
    <h2>Furniture</h2>
    </div>
     <div className="proSection">
       {firstFiveImages.map((items)=>{      
       return(
        <div className="imgBox">
            
        <img className="proImage"src={items.image}/>    
        </div>
             )

                             }
                      )
       }
     </div>
     </>
             )

                        }





 export default Furniture;