import React from 'react'
import {computerData} from "../stores/data/computers"

import {useParams} from "react-router-dom"// Dynamic routing
import Navbar from '../stores/components/Navbar'
import {useCart} from '../stores/context/CartContext'
const ComputerSingle = () => {
    // by using the useParams we can get the :id

const {id}=useParams();
// using useParams hook we are getting id endpoint.id is the unique key in ll the products
const {addToCart, cartItems} = useCart()

const product=(computerData.find((items)=>items.id===id))
 
console.log(id)

return (
    <>
    
    <Navbar/>
<div className="ind-section">
           <div className="ind-image">
       <img src={product.image} alt=""/>
         </div>
         <div className="ind-company">
            <h2>{product.company}</h2>
         </div>
         <div className="ind-details space">
 <div className="ind-model space">
    <h3>{product.model}</h3>
 </div>
 
<div className="ind-price space">
        <h2>{product.price}</h2>
</div>

<div className="ind-desc space">
    <p>
        {product.description}
    </p>
</div>

<button onClick={()=>addToCart(product)}>Add to Cart</button>
</div>

</div>

</>
       )
 
       
 }
 



export default ComputerSingle;
