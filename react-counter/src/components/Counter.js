import { useState } from 'react';

function Counter() {
    const [count, setValue] = useState("0");
    return (
        <div>
            <h1>Counter</h1>
            <br />
            <p>{count}</p>
            <button onClick={() => { setValue(count - 1) }}>Decrease</button>
            <button onClick={() => { setValue(count + 1) }}>Increase</button>
            <button onClick={() => { setValue(0) }}>Reset</button>
        </div>
    )
}

export default Counter;