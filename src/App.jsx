import react from 'react';
import './App.css'

import LandingPage from './stores/pages/LandingPage';
import {Routes,Route} from "react-router-dom"
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchesPage from './stores/pages/WatchesPage';
import FurniturePage from './stores/pages/FurniturePage';
import MenFashionPage from './stores/pages/MenFashionPage';
import WomanFashionPage from './stores/pages/WomanFashionPage';
import AirConditionPage from './stores/pages/AirConditionPage';

import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './singles/MobileSingle';
import ComputerSingle from './singles/ComputerSingle';

import AcSingle from './singles/AcSingle';
import WatchSingle from './singles/WatchSingle';
import WomanSingle from './singles/WomanSingle';
import MenSingle from './singles/MenSingle';
import FurnitureSingle from './singles/FurnitureSingle';



import KitchenSingle from './singles/KitchenSingle';

import UserCart from './stores/userCart';
 function App() {
 
  return (
    
    <>
    <Routes>

      <Route path="/" element={<LandingPage></LandingPage>}/>
      <Route path="/emart" element={<LandingPage></LandingPage>}/>
      <Route path="/mobiles" element={<MobilePage/>}/>
      <Route path="/computers" element={<ComputerPage/>}/>
      <Route path="/watches" element={<WatchesPage/>}/>
      <Route path="/Computers" element={<ComputerPage/>}/>
      <Route path="/menswear" element={<MenFashionPage/>}/>
      <Route path="/womanDressing" element={<WomanFashionPage/>}/>
      <Route path="/furniture" element={<FurniturePage/>}/>
      <Route path="/ac" element={<AirConditionPage/>}/>
      <Route path="/kitchen" element={<KitchenPage/>}/>

      <Route path="/mobiles/:id" element={<MobileSingle/>}/>
      <Route path="/computers/:id" element={<ComputerSingle/>}/>
      <Route path="/ac/:id" element={<AcSingle/>}/>
      <Route path="/watches/:id" element={<WatchSingle/>}/>
      <Route path="/womanDressing/:id" element={<WomanSingle/>}/>

      <Route path="/menswear/:id" element={<MenSingle/>}/>
      <Route path="/furniture/:id" element={<FurnitureSingle/>}/>
      <Route path="/kitchen/:id" element={<KitchenSingle/>}/>
      <Route path="/cart" element={<UserCart/>}/>

      {/* <Route path="/computers/:id" element={<ComputerSingle/>}/> */}

      </Routes>
    </>
  )


 }


export default App;