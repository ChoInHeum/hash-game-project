import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styles from "./Header.module.css";

export default function Header() {
  const navigate = useNavigate();

  const loginButtonClick = () => {
    navigate('/login');
  }

  return (
    <header className={styles.main_header}>
      <a href='/'><h1>HASH GAME</h1></a>
      <nav className={styles.nav}>
        <button className={styles.button}>Crush</button>
        <button className={styles.button}>Hight-Low</button>
        <button className={styles.button}>Ladder</button>
      </nav>
      <div className={styles.authContainer}>
        <button className={styles.button} onClick={loginButtonClick}>Sign In</button>
        <button className={styles.button}>Sign Up</button>
      </div>

      <div className={styles.menu}>
        <button className={styles.button}>☰</button>
      </div>
     </header>
  )
};