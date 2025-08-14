import React from 'react'
import { useState } from 'react';
import img from '/public/cookie-1.png';


const Clicker = () => {

    const [score, setScore] = useState(0);

    return (
        <>
        <p>Clicker</p>
        <div>
            <p>Score: {score}</p>
            <button onClick={() => setScore(score + 1)}>
                <img src={img} alt="Cookie" />
            </button>
        </div>
        </>
    );
};

export default Clicker