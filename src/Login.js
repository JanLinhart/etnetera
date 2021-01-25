import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from "react-router-dom";
function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
   
    let history = useHistory()
    const onSubmit = (e) => {
      e.preventDefault();
      const getIn = {
      
        "login":email,
        "password":password,
        
    
      };
  
      
      axios
        .post('https://js-test-api.etnetera.cz/api/v1/login', getIn,
        {
            headers: {
                
                 'content-type': 'application/json', 
           }
        }).then((res) => {
      console.log(res.data); 
      history.push("/phones");
    })
        .catch((error) => console.log(error));
       
    };
    return (
        <div>
           <form >
         <label>email</label> <input value={email}
          onChange={(e) => setEmail(e.target.value)} type="text"/>
        <label>password</label>  <input type="text" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
        <button onClick={onSubmit}>login</button>
           </form>
        </div>
    )
}

export default Login
