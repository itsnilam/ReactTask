import React from 'react'

function Button({onPlay1}) {

    function handalClick (){
        onPlay1()
    }
  return (
    <>
      <button onClick={handalClick}>Button</button>
    </>
  )
}

export default Button
