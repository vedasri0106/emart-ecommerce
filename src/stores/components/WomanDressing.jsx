import React from 'react'
import { womanData } from "../data/woman"

const WomanDressing = () => {
  const firstFiveImages = womanData.slice(0, 5);
  return (

    <>
    <div className="proTitle">
      <h2>Mobiles</h2>
    </div>
      <div className="proSection">
        {firstFiveImages.map((items) => {
          return (
            <div className="imgBox">
              <img className="proImage" src={items.image} />
            
            </div>
          )

        }
        )
        }
      </div>
    </>
  )

}





export default WomanDressing;