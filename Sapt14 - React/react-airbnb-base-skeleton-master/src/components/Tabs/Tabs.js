import React from 'react';
import styles from './Tabs.module.scss'

const Tabs = () => {
    return (
        <div>
            <button className={styles.button}>Dates</button>
            <button className={styles.button}>Guests</button>
        </div>
    );
};

export default Tabs;