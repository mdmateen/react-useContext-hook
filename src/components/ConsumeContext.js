
import React,{createContext, useContext} from 'react'
import { UserContext } from './UseContext';

function ConsumeContext() {
    const user = useContext(UserContext);
    return (
      <>
        <h1>ChildComponent1 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
       
      </>
    ); 
}
export default ConsumeContext