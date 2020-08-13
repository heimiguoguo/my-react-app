import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

function Example() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        document.title = `You clicked ${count} times`
    })
    return <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>click</button>
    </div>
}

export default Example