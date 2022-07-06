import { useState, createContext, useContext } from "react";
import ReactDOM from "react-dom/client";
import ChildComponent1 from "./ChildComponent1";
import ConsumeContext from "./ConsumeContext";

export const UserContext = createContext();

function UseContext() {
    const [user, setUser] = useState("Jesse Hall");

    return (
      <UserContext.Provider value={user}>
        <h1>{`Hello ${user}!`}</h1>
        <ChildComponent1  />
      </UserContext.Provider>
    );
}
/* function  ChildComponent1(){
    const user = useContext(UserContext);

    return (
      <>
        <h1>ChildComponent1 5</h1>
        <h2>{`Hello ${user} again!`}</h2>
       
      </>
    );  
}
 */


export default UseContext