import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/style.css';
import logo from '../assets/images/logo.svg';
import Home from './Home.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash, faSlash } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';

async function loginUser(credentials){
  return fetch('http://localhost:8081/login', {
    method:'POST',
    headers : {
      'Content-Type':'application/json',
    },
    body: JSON.stringify(credentials)
  })
  .then(data=>data.json())
}

const Login = ({setToken}) =>{
  const navigate = useNavigate();
  const [isLoggedin, setIsLoggedin] = useState(false);
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState({password : "", showPassword : false});

  // const login=(e)=>{
  //   e.preventDefault();
  //   const data = {
  //     email, 
  //     pwd
  //   }
  //   localStorage.setItem('token-info', JSON.stringify(data));
  //   setIsLoggedin(true);
  //   setEmail('');
  //   setPwd('');
  // }
  
  const handleSubmit = async e =>{
    e.preventDefault();
    const token = await loginUser({
      email,
      pwd
    })
    setToken=token;
    navigate("/home");
  }
    

  const handlePasswordChange = (prop) =>(event) =>{
    setPwd({...pwd, [prop]: event.target.value});
  }

  const handleShowPassword = ()=> {
    setPwd({...pwd, showPassword: !pwd.showPassword});
  }
  return(
    <div className="body"> 
    {
      !isLoggedin?(
        <div className ="Form" >
       <div className="card">
        <div className='logo'>
          <img src={logo} alt="logo" style={{height:'100px' }} />
        </div>
         <h1>Login to continue</h1>
         <form className="form ui" onSubmit={handleSubmit}>
           <div className="field">
            <input type ="email" className="email" placeholder="Email address" value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <span className='line'></span>
           </div>
           <div className="field">
            <div className='pwd'>
            <input type ={pwd.showPassword?"text":"password"} className="password" placeholder="Password" value={pwd.password} onChange={handlePasswordChange("password")}/>
            <FontAwesomeIcon icon={pwd.showPassword?faEye:faEyeSlash} onClick={handleShowPassword} />
            </div>
            <span className='line'></span>
            <a href='#' className='pwd-forgotten'>Password forgotten?</a>
           </div>
           <button className="submit-btn" type="submit">Login</button>
           <div className="signup" >
             Don't have an account? 
           <a href='#'>Sign up</a>
           </div>
          </form>
       </div>
    </div>
      ):
      (
        <div></div>
      )
    }
    
  </div> 
  );
}

Login.prototypes = {
  setToken : propTypes.func.isRequired
}
export default Login;