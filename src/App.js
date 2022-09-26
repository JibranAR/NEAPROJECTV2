import { useState } from 'react';
import './App.css';
import './functions.jss';





import { signup } from 'firebase/auth';
 
const App = () => {
  return (
    <div className="App">
      
      <div>
        <input placeholder="Email" />
        <input type="password" placeholder="Password" />
      </div>
    <button onClick={{handleRegister}}>Register </button>




    </div>



  );
}

export default App;
