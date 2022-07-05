/* refe */
import React from 'react'

function UseEffectComp() {

    const initialCount = 0;
    const [count, setCount] = React.useState(initialCount);

    // Its same as componentDidMount() and componentDidUpdate()
    
    React.useEffect(() => {
        // Update the document title using the browser API
        document.title = `You clicked ${count} times`;

        console.log("Updating the value count is "+count)
    },[]);
    return (
        <>
        <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </>
    )
}

export default UseEffectComp