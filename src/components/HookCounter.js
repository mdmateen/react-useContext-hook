/* refe */

import React, {useState} from 'react'

function HookCounter() {


  const [count,setCount] = useState(0)  /* Array destructing  */


  return (
    <>
    
    <button onClick={()=>setCount(count+1)}>Count {count} </button>
    </>
  )
}

export default HookCounter