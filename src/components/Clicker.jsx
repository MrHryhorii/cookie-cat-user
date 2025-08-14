import React from 'react'
import { useState } from 'react';
import styles from '../components/Clicker.module.css'
import img from '/public/cookie-1.png';


const Clicker = () => {

    const [score, setScore] = useState(0);

    return (
        <>
        <p className={styles.title}>Clicker</p>
        <div>
            <p className={styles.score}>Score: {score}</p>
            <button onClick={() => setScore(score + 1)}>
                <img src={img} alt="Cookie" />
            </button>
        </div>
        </>
    );
};

export default Clicker