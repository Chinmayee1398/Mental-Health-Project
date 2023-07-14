import { useState } from 'react';

import { NavLink, Routes, Route, useNavigate } from 'react-router-dom';

import './App.css';
//PAGES
import Signup from './components/Signup';
import Home from './components/Home';
import Login from './components/Login';
import Question1 from './components/question1';
import Question2 from './components/question2';
import Question3 from './components/question3';
import Question4 from './components/question4';
import Question5 from './components/question5';
import Homepage from './components/Homepage';

//multiple route needs to be under routes
//exact to not used in v6 since its default
//Navlink is anchor tag

const App = () => {
  return (

    <div>

      <Routes>

        <Route path='/' element={<Home />} />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />   
        <Route path='/question1' element={<Question1 />} /> 
        <Route path='/question2' element={<Question2 />} /> 
        <Route path='/question3' element={<Question3 />} /> 
        <Route path='/question4' element={<Question4 />} /> 
        <Route path='/question5' element={<Question5 />} /> 
        <Route path='/Homepage' element={<Homepage />} /> 

        <Route path='*' element={<h4 className='error'>Route not found</h4>} />

      </Routes>

    </div>

  );

}

// import React from 'react';
// import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
// import './App.css';
// import Signup from './components/Signup';


// const App = () => {
//   return (
//     <Router>
//       <div className="container">
//         <div>
//           <img src="https://via.placeholder.com/189x250" alt="" />
//         </div>
//         <div>
//           Welcome to Happyfox!
//         </div>
//           <div>I am Foxy! Here to support you on your journey towards better mental health and emotional balance.</div>
//         <div className="buttons">
//           <div className="account-button">
//             <div></div>
//             <div>
//               I have an account
//             </div>
//           </div>
//           <Link to="/Signup" className="account-button">
//             I'm new here
//           </Link>
//         </div>
//       </div>
//       <Route path="/Signup" component={Signup} />
//     </Router>
//   );
// };

export default App;














