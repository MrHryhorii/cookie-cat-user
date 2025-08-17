import React from 'react'
import { useState } from 'react';
import styles from '../components/Clicker.module.css'


const Clicker = () => {

    const [score, setScore] = useState(0);

    return (
        <section>
        <div className={styles.wrap}>
            <p className={styles.counter}>Score: {score}</p>
            <button className={styles.cookieBtn} onClick={() => setScore(score + 1)}>
                <img className={styles.img} src="/cookie.png" alt="Image of a Cookie" />
            </button>
        </div>
        </section>
    );
};

export default Clicker