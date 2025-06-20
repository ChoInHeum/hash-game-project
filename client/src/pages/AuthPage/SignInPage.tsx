import React from "react";
import styles from "./SignInPage.module.css";

export default function LoginPage() {
    return(
        <main className={styles.main}>
            <div className={styles.backgroundCard_div}>
                <h1 className={styles.h1}>Sign In</h1>
                <div className={styles.input_div}>
                    <p className={styles.p}>ID</p>
                    <input type="text" placeholder="ID" className={styles.input}/>
                </div>
                <div className={styles.input_div}>
                    <p className={styles.p}>Password</p>
                    <input type="password" placeholder="Password" className={styles.input}/>
                </div>
                <button className={styles.button}>Sign In</button>
                <div className={styles.auth_div}>
                    <a href="/" className={styles.a}>아이디 찾기</a>
                    <a href="/" className={styles.a}>비밀번호 찾기</a>
                    <a href="/" className={styles.a}>회원가입</a>
                </div>
            </div>
        </main>
    );
}