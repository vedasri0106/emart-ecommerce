import React from 'react';
import { menData } from "../data/men";

let firstFiveImages = menData.slice(0, 5);
const MenFashion = () => {
  return (

    <>
    <div className="proTitle">
      <h2>Men Fashion</h2>
      </div>
      <div className="proSection">
        {
          firstFiveImages.map((items) => {

            return (

              <div className="imgBox">
                <img className="proImage" src={items.image} />
              </div>

            )
          })
        }
      </div>
    </>
  )
}


export default MenFashion;
