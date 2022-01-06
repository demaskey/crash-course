import React, { useState } from 'react';

export default function  Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h2>Counter with State</h2>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </>
    );
}