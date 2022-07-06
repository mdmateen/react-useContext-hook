import React,{createContext, useContext} from 'react'
import { UserContext } from './UseContext';

function ChildComponent1() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>ChildComponent1 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
       
      </>
    ); 
}

export default ChildComponent1