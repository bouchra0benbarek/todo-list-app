import React from 'react';
import {useState, useEffect} from 'react';
import logo from '../assets/images/logo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBars, faUser, faAdd } from '@fortawesome/free-solid-svg-icons'
import ToDo from './ToDo';

const Home = () => {
        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);

        const [todo, setTodo] = useState([]);

        const fetchData = () => {
            return fetch("http://localhost:3001/nestedTodos")
                .then((response) => response.json())
                .then((data) => setTodo(data));
        }

        useEffect(() => {
            fetchData();
        },[])
      

        return(
            <div>
                {
                    sidebar ? (
                        <div className='sidebar'>
                    <div className='logo-side-bar'>
                        <img src={logo} alt="logo" style={{height:'100px' }} />
                        <FontAwesomeIcon icon={faBars} className="menu" onClick={showSidebar}/>
                    </div>
                    <button className='item'>
                        <FontAwesomeIcon icon={faHome} id="icon"/>
                        <span>Tasks</span>
                    </button>
                    <button className='item'>
                    <FontAwesomeIcon icon={faHome} id="icon"/>
                        <span>Tasks</span>
                    </button>
                    <button className='item'>
                    <FontAwesomeIcon icon={faHome} id="icon"/>
                        <span>Tasks</span>
                    </button>
                </div> 
                    ) :
                    (
                    <div className='sidebar-collapsed'>
                        <div className='logo-side-bar'>
                            <FontAwesomeIcon icon={faBars} className="menu" onClick={showSidebar}/>
                        </div>
                        <button className='item'>
                            <FontAwesomeIcon icon={faHome} id="icon"/>
                        </button>
                        <div>
                        <button className='item'>
                        <div className='usericon'><FontAwesomeIcon icon={faUser} id="icon"/></div>
                        </button>
                        </div>
                    </div>  
                    )
                }
                
                {/* <div className='navbar'>
                    <div className='usericon'><FontAwesomeIcon icon={faUser}/></div>
                </div> */}
                <div className='container'>
                    <h1>Lists of tasks</h1>
                    
                       
                        {todo && todo.length > 0 && todo.map((userObj, index) => (
                            <div className='list-title'>
                            <input type="checkbox"/>
                            <h2 key={userObj.id}>{userObj.title}</h2>
                            </div>
                    ))}
                     
                 
                    <button className='add-btn'><FontAwesomeIcon icon={faAdd}/></button>
                </div>
                <div>
                <ToDo/>
                </div>
            </div>
        );
}

export default Home;