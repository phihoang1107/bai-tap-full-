import React, { useState } from 'react'

const Image = () => {
    const [toggle, setToggle] = useState(false)
    const handleClick= () =>  {
        setToggle(!toggle)
       
    }
    return (
        <div>
           <button onClick={handleClick}>show</button>
         {           toggle?<img src="https://thuthuatnhanh.com/wp-content/uploads/2019/08/anh-nen-3d-thien-nhien.jpg"/>:""}
        </div>
    )
}

export default Image
