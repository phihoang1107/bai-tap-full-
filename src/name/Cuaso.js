import React, { useState } from 'react'

const Cuaso = () => {
    const[toggle, setToggle]= useState(false)
     const handleClick = () =>{
        setToggle (!toggle)
     }
    return (
        <div>
            <button onClick={handleClick}>hien</button>
            <input type={toggle?"type":"password"}/>
            
        </div>
    )
}

export default Cuaso
