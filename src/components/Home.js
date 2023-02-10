import React from 'react';
import {useState, useEffect} from 'react';
import logo from '../assets/images/logo2.svg';
import home from "../assets/images/Home.svg";
import today from '../assets/images/Sun.svg';
import upcoming from '../assets/images/Calendar today.svg';
import important from '../assets/images/Star border purple500.svg';
import trash from '../assets/images/Delete.svg';
import menu from '../assets/images/Menu.svg';
import add from '../assets/images/plus-lg.svg';
import chevron from '../assets/images/chevrondown.svg';
import chevronright from '../assets/images/chevronright.svg';
import chevronup from '../assets/images/chevronup.svg';
import tasklist from '../assets/images/list-task.svg';
import notif from '../assets/images/notif.svg';
import profil from '../assets/images/profile.svg';
import signout from '../assets/images/sign out.svg';
import ToDo from './ToDo';

const Home = () => {
        const [sidebar, setSidebar] = useState(false);
        const showSidebar = () => setSidebar(!sidebar);
        const [list, setList] = useState(false);
        const showList = ()=>setList(!list);
        const [todo, setTodo] = useState([]);
        const [profile, setProfile]=useState(false);
        const dropDownprofile = ()=>setProfile(!profile);
        const [tasks, setTasks] =  useState(false);
        const showtasks = ()=>setTasks(!tasks);
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
                !sidebar ? (
                    <div className='sidebar'>
                        <div className='logo-side-bar'>
                            <img src={logo} alt="logo" style={{height:'60px'}} />
                            <img src={menu} className="menu" style={{width:"30px"}} onClick={showSidebar}/>
                        </div>
                        <span style={{borderBottom : "1px solid rgb(219 219 219)", width:"100%", marginBottom:"20px" }}></span>
                        <button className='item'>
                            <div className='navitem'>
                                <img src={home} alt="home-img" id="icon"/>
                                <span>All</span>
                            </div>
                            <span className='count'>4</span>
                        </button>
                        <button className='item'>
                            <div className='navitem'>
                                <img src={today} alt="today-img" id="icon"/>
                                <span>Today</span>
                            </div>
                            <span className='count'>4</span>
                        </button>
                        <button className='item'>
                            <div className='navitem'>
                                <img src={upcoming} alt="upcoming-img" id="icon"/>
                                <span>Upcoming</span>
                            </div>
                            <span className='count'>4</span>
                        </button>
                        <button className='item'>
                            <div className='navitem'>
                                <img src={important} alt="important-img" id="icon"/>
                                <span>Important</span>
                            </div>
                            <span className='count'>4</span>
                        </button>
                        <button className='item'>
                            <div className='navitem'>
                                <img src={trash} alt="bin-img" id="icon"/>
                                <span>Trash</span>
                            </div>
                            <span className='count'>4</span>
                        </button>
                        <span style={{borderBottom : "1px solid rgb(219 219 219)", width:"100%", marginBottom:"20px" }}></span>
                        <button className='item' onClick={showList} style={{marginBottom:"0px"}}>
                            <div className='navitem'>
                                <img src={list?chevron:chevronright} alt="lists-img" id="icon"/>
                                <span>Lists</span>
                            </div>
                        </button>
                        
                            {list ? (
                            <div>
                                <button className='item' style={{marginLeft:"15px", marginBottom:"0px"}}>
                                    <div className='navitem'>
                                        <img src={tasklist} alt="tasklist-img" id="icon"/>
                                        <span>Personal</span>
                                    </div>
                                </button>
                                <button className='item'>
                                    <div className='navitem' style={{color:"#4772fa"}}>
                                        <img src={add} alt="addnew-img" id="icon"/>
                                        <span>New</span>
                                    </div>
                                </button>
                            </div>
                            ):
                            <button className='item' style={{marginTop:"20px"}}>
                                <div className='navitem' style={{color:"#4772fa"}}>
                                    <img src={add} alt="addnew-img" id="icon"/>
                                    <span>New</span>
                                </div>
                            </button>
                            }
                        
                    </div> 
                ) :
                (
                    <div className='sidebar-collapsed'>
                        <div className='logo-side-bar'>
                            <img src={menu} className="menu" onClick={showSidebar}/>
                        </div>
                        <button className='item'>
                            <img src={home} alt="home-img" id="icon"/>
                        </button>
                        <button className='item'>
                            <img src={today} alt="today-img" id="icon"/>
                        </button>
                        <button className='item'>
                            <img src={upcoming} alt="upcoming-img" id="icon"/>
                        </button>
                        <button className='item'>
                            <img src={important} alt="important-img" id="icon"/>
                        </button>
                        <button className='item'>
                            <img src={trash} alt="bin-img" id="icon"/>
                        </button>
                        <button className='item'>
                            <img src={add} alt="new-img" id="icon"/>
                        </button>
                    </div>  
                    )
                }
                
                <div className='navbar'>
                    <img src={notif} alt="notification" id="icon" style={{marginRight:'10px'}}/>
                    <div className='usericon' onClick={dropDownprofile}></div>
                    <img src={profile?chevronup:chevron} alt="chevron-img" id="icon" onClick={dropDownprofile}/>
                </div> 
                {
                    profile?(
                        <div className='dp-profile'>
                            <button className='item' style={{marginTop:"20px"}}>
                                <div className='navitem'>
                                    <img src={profil} alt="addnew-img" id="icon"/>
                                    <span>My profile</span>
                                </div>
                            </button>
                            <button className='item'>
                                <div className='navitem'>
                                    <img src={signout} alt="addnew-img" id="icon"/>
                                    <span>Sign out</span>
                                </div>
                            </button>
                        </div>
                    ):(
                        <div></div>
                    )
                }
                <div className='container'>
                    <div className='navitem'>
                        <img src={home} alt="home-img" id="icon" style={{height:"32px", marginRight:"10px"}}/>
                        <h1>My tasks</h1>
                    </div>
                    <div className='new-task'>
                        <img src={add} alt="new-img" id="icon"/>
                        <input type={"text"} placeholder="New task"/>
                    </div>
                    <div className='taskslists'>
                        <button className='item' onClick={showtasks} style={{marginBottom:"0px"}}>
                            <div className='navitem'>
                                <img src={tasks?chevron:chevronright} alt="lists-img" id="icon"/>
                                <span>Personal</span>
                            </div>
                        </button>
                    </div>
                    
                       
                        {/* {todo && todo.length > 0 && todo.map((userObj, index) => (
                            <div className='list-title'>
                            <input type="checkbox"/>
                            <h2 key={userObj.id}>{userObj.title}</h2>
                            </div>
                    ))} */}
                 
                    
                </div>
                {/* <div>
                <ToDo/>
                </div> */}
            </div>
        );
}

export default Home;