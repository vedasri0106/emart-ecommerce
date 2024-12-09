import React from 'react'
import { Link } from 'react-router-dom';

import { useCart } from '../context/CartContext';
const Navbar = () => {


    const {cartItems }= useCart()
  return (
    <>
    <div className="navbar-section">
      <div className="navSection">

                <div className="title">
                    <Link to="/" className="custom-link">
                    <h2>E-Mart</h2>
                    </Link>
                </div>
                <div className="search">
                 <input type="text" placeholder="search" />

                </div>
                <div className="user">
                    <div className="user-detail">

                        SignIN/SignUP
                    </div>


                    <Link to="/cart">
                    <div className="cart">
                        Cart<span>{cartItems.length} </span>
                    </div></Link>
                </div>

</div>
                        <div className="subMenu">
                                    <ul>
                                      <Link to="/mobiles">
                                        <li>Mobiles</li>
                                     </Link>
                                     <Link to="/computers">
                                        <li>Computers</li>
                                    </Link>
                                    <Link to="/watches">
                                        <li>Watches</li>
                                    </Link>

                                    <Link to="/menswear">
                                        <li>Men Fashion</li>
                                     </Link>
                                     <Link to="/womanDressing">
                                        <li>Woman Dressing</li>

                                    </Link>
                                    <Link to="/furniture">
                                        <li>Furniture</li>
                                    </Link>
                                    <Link to="/ac">
                                        <li>AC</li>
                                    </Link>
                                    <Link to="/kitchen">
                                        <li>Kitchen</li>
                                    </Link>
                                    </ul>
                        </div>



                                    



       
                        </div>
  </>  


  )
}






export default Navbar;
