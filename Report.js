import React from 'react'

function Report({item}) {
  return (
    <div>
      <ul className='title'>{item.title}
            <li className='disc detail'>{item.summary}</li>
            <li className='assign detail'>{item.auther}</li>
            <li className='dueDate detail'>{item.date}</li>
            {/* <li className='status detail'>{item.status}</li> */}
            </ul>
    </div>
  )
}

export default Report
