import React from 'react'
import { watchData } from "../data/watch"

const Watches = () => {
   let firstFiveImages = watchData.slice(0, 5)
   return (

      <>
      <div className="proTitle">
         <h1>Watches</h1>
      </div>
         <div className="proSection">
            {firstFiveImages.map((items) => {
               return (

                  <div className="imgBox">



                     <img className="proImage" src={items.image} />
                  </div>
               )
            })}
         </div>


      </>
   )
}

export default Watches
