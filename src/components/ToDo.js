import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons'

const ToDo = () =>{
    const data = { "userId": 1, "title": "todo", "completed": false, "endDate": "05/01/2023", "pos": 1, "description": "call the client" }
        const postData=() => {
    
            // Send data to the backend via POST
            fetch('http://localhost:3001/todos', {  // Enter your IP address here
        
              method: 'POST', 
              body: JSON.stringify(data) // body data type must match "Content-Type" header
        
            })
            
          }
    return(
        <div className='todo'>
             <div className='header'>
                <FontAwesomeIcon icon={faHome} id="icon"/>
                <h1>New task</h1>
             </div>
            <div className='todo-item'>
                <label>Title*</label>
                <input required placeholder='Title' className='title'/>
            </div>
            <div className='todo-item'>
                <label>Description</label>
                <textarea type="textarea" className='desription' not required placeholder='Description' autoComplete='off'/>
            </div>
           <div className='todo-item'>
                <label>End Date</label>
                <input not required placeholder='End date' type='date' className='end date'/>
           </div>
           <button  className='submit-btn add' onClick={postData}>Add</button>
        </div>
    );
}

export default ToDo;