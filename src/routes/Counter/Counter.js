import React, { useState } from 'react';

export default function  Counter() {
    const [count, setCount] = useState(0);

    return (
        <>
            <h1>Counter with State</h1>
            <p id='clickedTxt'>You clicked {count} times.</p>
            <button id='btnClickMe' onClick={() => setCount(count + 1)}>
                Click Me!
            </button>
        </>
    );
}