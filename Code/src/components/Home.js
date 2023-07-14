import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleLoginButtonClick = () => {
      navigate('/Login');
    };

    const handleLoginButtonClick1 = () => {
        navigate('/Signup');
      };

    return (

           <div className="App" data-testid="App">

             <nav data-testid="main_nav">
        
       
             </nav>
               <div className="container">
                <div>
                  <img src="https://via.placeholder.com/189x250" alt="" />
                </div>
                <div>
                  Welcome to Happyfox!
                </div>
                  <div>I am Foxy! Here to support you on your journey towards better mental health and emotional balance.</div>
                <div className="buttons">
                 <nav>
                <button className="account-button"  onClick={handleLoginButtonClick}>Login</button>
       
              <button className="account-button" onClick={handleLoginButtonClick1}>Signup</button>
       </nav>
                </div>
                </div>
                </div>
              
    )

}




export default Home