import { useState } from "react";

function Counter() {
    const [count , setCount] = useState(0);

    function decrement() {
        if (count > 0) {
            setCount(prevCount => prevCount - 1)
        }
    }

    return (
        <div className="container">
            <h1>SImple Counter</h1>
            <h2>Count: {count}</h2>
            <div className="btn-cont">
                <button className="increment" onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
                <button className="decrement" onClick={decrement}>Decrement</button>
                <button className="reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    )
}

export default Counter;