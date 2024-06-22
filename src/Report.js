import React from 'react'

function Report({item}) {
  return (
    <div>
      <ul className='title'><span>Title: </span>{item.title}
            <li className='disc detail'><span>Summary: </span>{item.summary}</li>
            <li className='assign detail'><span>Auther: </span>{item.author}</li>
            <li className='dueDate detail'><span>Date: </span>{item.date}</li>
            {/* <li className='status detail'>{item.status}</li> */}
            </ul>
    </div>
  )
}

export default Report
