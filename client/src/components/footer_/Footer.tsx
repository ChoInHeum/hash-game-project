import React from "react";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p className={styles.p}>
                © {new Date().getFullYear()} Hash Game. All rights reserved.
            </p>
        </footer>
    );
}