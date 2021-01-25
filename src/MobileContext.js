import React, { useState, useEffect, createContext
 
} from 'react';
import axios from 'axios';


export const MobileContext = createContext({
 mobiles: [],
  setMobiles: () => {},
  updateMobiles: () => {},
});

export default function MobileProvider(props) {
  const [mobiles, setMobiles] = useState([]);
  
  const updateMobiles = (id) => {
 
    axios
      .get('https://js-test-api.etnetera.cz/api/v1/phones')
      .then((res) => setMobiles(res.data));
  };

  useEffect(() => {
    axios
      .get('https://js-test-api.etnetera.cz/api/v1/phones')
      .then((res) => setMobiles(res.data));
      
  }, [] );

  return (
    <MobileContext.Provider value={{ mobiles, setMobiles, updateMobiles }}>
      {props.children}
    </MobileContext.Provider>
  );
}
