import React from 'react'
import { MobileContext } from './MobileContext';
import { useContext } from 'react';
import Mobile from './Mobile';
import Navbar from './Navbar';
function MobileList() {
    const { mobiles } = useContext(MobileContext);
    return (
        <div>
            <Navbar/>
         {mobiles.map((item) => (
          <Mobile
           vendor={item.vendor} 
           
          />
        ))}  
        
       
        </div>
    )
}

export default MobileList
