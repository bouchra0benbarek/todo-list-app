import './App.css';
import Login from './components/Login.js';
import Home from './components/Home.js';
import { useState } from 'react';
import useToken from './useToken';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
  const { token, setToken } = useToken();

  if(!token) {
    return <Login setToken={setToken} />
  }else{
    return (
      <div className="App">
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/home' element={<Home/>}/>
          </Routes>
      </div>
    );
  }
}

export default App;
