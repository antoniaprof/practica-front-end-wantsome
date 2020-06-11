import React from 'react';
import styles from '../../List/List.module.scss'

const Card = (props) => {
    console.log(props)
    return (
        <div className={styles.card}>
             <img src={props.image} className={styles.image} />
            <div className={styles.type}>{props.type}</div>
            <div className={styles.city}>{props.city}</div>
            <div className={styles.name}>{props.name}</div>
            <div className={styles.rating}>{props.rating}</div>
            <div className={styles.host}>{props.host}</div> 
        </div>
    );
};

export default Card;

