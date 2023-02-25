import { useState } from 'react';
import './style.scss';

export const COUNTER = () => {
    let [count, setCount] = useState(0);

    const increment = () => {
        count > 0 && setCount(count -= 1);
    };

    const decrement = () => {
        setCount(count += 1);
    };

    return (
        <section className="counter">
            <div className='container'>
                <h2 className='top-title'>Simple counter:</h2>
                <div className="counter-output">{count}</div>
                <button className="counter-increment minus" onClick={increment}>- Minus</button>
                <button className="counter-decrement plus" onClick={decrement}>Plus +</button>
            </div>
        </section>
    );
};