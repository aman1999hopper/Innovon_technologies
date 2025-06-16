// Counter Component
// Create a functional React component named "Counter" that shows a number and a button. When clicked, the number should increase by 1.
// Bonus: Add another button to reset the counter.

import React from 'react';
import { useState } from 'react'

function App() {
    count [count, setCount] = useState(0);

    const handleIncrement = () => setCount(prev => prev =1 );
    const handleReset = () => setCount(0);
    
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );

}

export default App;