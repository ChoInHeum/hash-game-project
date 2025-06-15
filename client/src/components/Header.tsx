import React, { useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import SignInModal from './SignInModal';
import styles from "./Header.module.css";

export default function Header() {
    const isMobile = useMediaQuery({ maxWidth: 1000 })
    const [showSignIn, setShowSignIn] = useState(false);

    return(
        <header className={styles.header}>
            {/* 왼쪽: 로고 */}
            <a href='/' className={styles.logo}>HashGame</a>

            {isMobile ? (
                // 모바일
                <div>
                    <div className={styles.auth}>
                        <button className={styles.authButton} onClick={() => setShowSignIn(true)}>Sign-In</button>
                        {showSignIn && <SignInModal onClose={() => setShowSignIn(false)}/>}
                        <button className={styles.authButton}>Sign-Up</button>
                    </div>    
                </div>
            ) : (
                <>
                    {/* 중앙: 게임 링크 */}
                    <nav className={styles.nav}>
                        <button className={styles.navButton}>Crush</button>
                        <button className={styles.navButton}>High-Low</button>
                        <button className={styles.navButton}>Ladder</button>
                    </nav>

                    {/* 오른쪽: 로그인/회원가입 */}
                    <div className={styles.auth}>
                        <button className={styles.authButton} onClick={() => setShowSignIn(true)}>Sign-In</button>
                        {showSignIn && <SignInModal onClose={() => setShowSignIn(false)}/>}
                        <button className={styles.authButton}>Sign-Up</button>
                    </div>
                </>
            )}
        </header>
    )
}