import { useState } from "react";
import H5 from "./bai4/H5";

const gifts= [
  'honda',
  'yamaha',
  'toyota',
  'mercedes'
]
function App() {

  // const [gift, setGift]= useState()
  // const handleRandom=()=> {
  //  const index=Math.floor(Math.random()*gifts.length)
  //  setGift(gifts[index])
  // }
// console.log(gift);
  return(
    <div style={{padding: 30}}>
      <h1>Random Gift</h1>
      <button >Lum thuong</button>
       {/* <h1>{gift}</h1> */}
       <H5/>
    </div>
  )
}

export default App;