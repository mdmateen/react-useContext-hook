import React from 'react'

function UseEffet2() {
    const [count, setCount] = React.useState(0);
    const [calculation, setCalculation] = React.useState(0);
  
    React.useEffect(() => {
        console.log("executed "+count)
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <>
        <p>Count: {count}</p>
        <button onClick={() => setCount((c) => c + 1)}>+</button>
        <p>Calculation: {calculation}</p>
      </>
    );
}

export default UseEffet2