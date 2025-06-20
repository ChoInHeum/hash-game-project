import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
    const navigate = useNavigate();

    const SignInButtonClick = () => {
        navigate('/auth/signin');
    };

    return (
        <header className={styles.header}>
            <a href="/"><h1 className={styles.logo}>HASH GAME</h1></a>
            <div className={styles.game_div}>
                <button className={styles.button}>Crush</button>
                <button className={styles.button}>Hight-Low</button>
                <button className={styles.button}>Ladder</button>
            </div>
            <div className={styles.auth_div}>
                <button className={styles.button} onClick={SignInButtonClick}>Sign In</button>
                <button className={styles.button}>Sign Up</button>
            </div>

            <button className={styles.mobileMenu_button}>☰</button>
        </header>
    )
}