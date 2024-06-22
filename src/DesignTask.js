import React from 'react'
import './App.css'
function DesignTask({item}) {
  return (
    <>
       
            <ul className='title'><span>Title:</span> {item.title}
            <li className='disc detail'><span>Description:</span> {item.description}</li>
            <li className='assign detail'><span>Assign To:</span> {item.assignedTo}</li>
            <li className='dueDate detail'><span>Due Date:</span> {item.dueDate}</li>
            <li className='status detail'><span>Status:</span> {item.status}</li>
            </ul>
         
    </>
  )
}

export default DesignTask
