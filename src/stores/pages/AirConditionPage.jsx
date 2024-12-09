import React,{ useState } from "react";
import {acData} from "../data/ac";

import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const AirConditionPage=()=>{

   const [selectedProduct,setSelectedProduct]=useState([]);
   const companyHandler=(mango)=>{
   
       if(selectedProduct.includes(mango)){
           setSelectedProduct(selectedProduct.filter(item=>item !==mango))
       }else{
   
           setSelectedProduct([...selectedProduct,mango])
       }
   }
   
   const filteredProduct=selectedProduct.length===0?
   
   acData:acData.filter((orange)=>selectedProduct.includes(orange.company))
   
   return(
       
<>
<Navbar/>

<div className="fullpage">
    
    <div className="pro-selected">
    
    {acData.map((phone)=>{
        return(
            <div className='pro-input'>
                <label >
                    <input type="checkbox" 
                    checked = {selectedProduct.includes(phone.company)}
                    onChange={()=>companyHandler(phone.company)}
                    />
                    {phone.company}
                </label>
            </div>
        )
    })}
    
    </div>
<div className="pageSection">

{filteredProduct.map((items)=>{return(

   <div>
    <Link to={`/ac/${items.id}`}>
       <div className="pageImg">
           <img src={items.image} alt="" />
       </div></Link>
       
       <div className="proModel">
        {items.company},{items.model}     
       </div>

   </div>
)


})}
</div>
</div>
</>
    )
 }

 export default AirConditionPage;