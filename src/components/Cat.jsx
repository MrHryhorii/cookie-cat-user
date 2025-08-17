import React from 'react'
import { useState, useEffect } from "react";
import styles from '../components/Cat.module.css'

const Cat = () => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [facts, setFacts] = useState([]);
    
    useEffect(() => {
        fetch("https://catfact.ninja/facts?limit=5")
        .then(res => {
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            return res.json();
        })
        .then(data => {
            setFacts(data.data);
            setLoading(false);
        })
        .catch(err => {
            setError(`Error: ${err.message || err}`);
            setLoading(false);
        });
    }, []);
    
    if (loading) return <p>Loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <section>
        <div className={styles.wrap}>
            <ul className={styles.list}>
                {facts.map((fact, i) => (
                    <li className={styles.item} key={i}>{fact.fact}</li>
                ))}
            </ul>
        </div>
        </section>
    )
}

export default Cat