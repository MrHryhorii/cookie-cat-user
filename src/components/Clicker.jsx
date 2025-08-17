import React from 'react'
import { useState } from 'react';
import styles from '../components/Clicker.module.css'


const Clicker = () => {

    const [score, setScore] = useState(0);

    return (
        <section>
        <p className={styles.title}>Clicker</p>
        <div>
            <p className={styles.score}>Score: {score}</p>
            <button onClick={() => setScore(score + 1)}>
                <img src="/cookie-1.png" alt="Image of a Cookie" />
            </button>
        </div>
        </section>
    );
};

export default Clicker