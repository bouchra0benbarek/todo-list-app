import React from 'react';
import '../style/style.css';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
class Login extends React.Component{

    render(){
        return(
            <div className="body"> 
              <div className ="Form" >
                 <div className="card">
                  <div className='logo'>
                    <img src={logo} alt="logo" style={{height:'100px' }} />
                  </div>
                   <h1>Login to continue</h1>
                   <form className="form ui">
                     <div className="field">
                      <input type ="email" className="email" placeholder="Email address"/>
                      <span className='line'></span>
                     </div>
                     <div className="field">
                      <div className='pwd'>
                      <input type ="password" className="password" placeholder="Password"/>
                      <FontAwesomeIcon icon={faEye} />
                    
                      </div>
                      <span className='line'></span>
                      <a href='#' className='pwd-forgotten'>Password forgotten?</a>
                     </div>
                     <button className="submit-btn" type="submit" onSubmit={this.onSubmitButton}>Login</button>
                     <div className="signup" >
                       Don't have an account?
                     <a href='#'>sign up</a>
                     </div>
                    </form>
                 </div>
              </div>
            </div>
        );
    }
}


export default Login;