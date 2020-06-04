import React from 'react';
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.leftDiv}>Show all(2000+)></div>
            <div className={styles.rightDiv}> Terms, privacy, currency and more</div>
        </div>
    );
};

export default Footer;