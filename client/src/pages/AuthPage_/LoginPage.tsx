import React from "react";
import styles from './LoginPage.module.css';

export default function LoginPage() {
    return(
        <main className={styles.main}>
            <div className={styles.loginCard_div}>
            <h1 className={styles.h1}>Sign In</h1>
            <div className={styles.input_div}>
                <input type="text" placeholder="ID" className={styles.input}></input>
                <input type="password" placeholder="Password" className={styles.input}></input>
                <p className={styles.p}>check your id and password</p>
            </div>
            <button className={styles.button}>Sign In</button>
            <div className={styles.authTool_div}>
                <a href="/login" className={styles.a}>Find ID</a>
                <a href="/login" className={styles.a}>Reset Password</a>
                <a href="/login" className={styles.a}>Sign Up</a>
            </div>
            </div>
        </main>
    );
}