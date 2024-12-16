import { useEffect, useState } from "react";

const LearnUseEffect = () => {
    console.log('--- Code execution ---');
    const [counter, setCounter] = useState(0);

    const doubleCount = () => {
        setCounter(c => c + 1); // 0 + 1
        setCounter(c => c + 1); // 0 + 1
    }

    useEffect(() => {
        console.log('--- Inside useEffect ---');
        return () => {
            console.log('--- Inside useEffect return ---');
        }
    }, [])

    return (
        <>
            <h1>UseEffect</h1>
            <div>
                <p>Counter: {counter}</p>
                <button onClick={doubleCount}>Increment</button>
            </div>
        </>
    )
}

export { LearnUseEffect }