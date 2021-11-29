import { useState } from 'react'
import Content from "./Content";
import Cuaso from './name/Cuaso';
import Image from './name/Image';
import Hoang from './name/Image';




function App() {
  
  const[show, setShow] = useState(false)

  return(
    <div style={{ padding: 30}}>
      {/* <button onClick={() => setShow(!show)}>Show</button>
     { show && <Content/>}  */}
  {/* <Content/> */}
    <Image/>
    {/* <Cuaso/> */}
    </div>
  )
    
}

export default App;