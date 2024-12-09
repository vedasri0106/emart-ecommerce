import React,{useState} from "react";
import {furnitureData} from "../data/furniture";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const FurniturePage=()=>{

   const [selectedProduct,setSelectedProduct]=useState([]);
   const companyHandler=(mango)=>{
   
       if(selectedProduct.includes(mango)){
           setSelectedProduct(selectedProduct.filter(item=>item !==mango))
       }else{
   
           setSelectedProduct([...selectedProduct,mango])
       }
   }
   
   const filteredProduct=selectedProduct.length===0?
   furnitureData:furnitureData.filter((orange)=>selectedProduct.includes(orange.brand))
   return(
       
<>
<Navbar/>
<div className="fullpage">
    
    <div className="pro-selected">
    
    {furnitureData.map((phone)=>{
        return(
            <div className='pro-input'>
                <label >
                    <input type="checkbox" 
                    checked = {selectedProduct.includes(phone.brand)}
                    onChange={()=>companyHandler(phone.brand)}
                    />
                    {phone.brand}
                </label>
            </div>
        )
    })}
    
    </div>
<div className="pageSection">
    
{filteredProduct.map((items)=>{
return(

   <div>
<Link to={`/furniture/${items.id}`}>
       <div className="pageImg">
           <img src={items.image} alt="" />
       </div></Link>
       <div className="proModel">

        {items.brand},{items.model}
       </div>
   </div>
)


})}
</div>

</div>
</>
    )
 }


 
 export default FurniturePage;