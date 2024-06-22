import React from 'react'
import './App.css'
function DesignTask({item}) {
  return (
    <>
       
            <ul className='title'>{item.title}
            <li className='disc detail'>{item.description}</li>
            <li className='assign detail'>{item.assignedTo}</li>
            <li className='dueDate detail'>{item.dueDate}</li>
            <li className='status detail'>{item.status}</li>
            </ul>
         
    </>
  )
}

export default DesignTask
