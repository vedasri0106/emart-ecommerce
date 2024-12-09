import React,{useState} from "react";
import {watchData} from "../data/watch";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const WatchesPage=()=>{


   const [selectedProduct,setSelectedProduct]=useState([]);
   const companyHandler=(mango)=>{
   
       if(selectedProduct.includes(mango)){
           setSelectedProduct(selectedProduct.filter(item=>item !==mango))
       }else{
   
           setSelectedProduct([...selectedProduct,mango])
       }
   }
   
   const filteredProduct=selectedProduct.length===0?
   watchData:watchData.filter((orange)=>selectedProduct.includes(orange.brand))

   return(
       
<>
<Navbar/>

<div className="pro-selected">
    
    {watchData.map((phone)=>{
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

<Link to={`/watches/${items.id}`}>
       <div className="pageImg">
           <img src={items.image} alt="" />

       </div>


       </Link>
       <div className="proModel">

        {items.brand},{items.model}
       </div>
   </div>
)


})}
</div>
</>
    )
 }

 export default WatchesPage;