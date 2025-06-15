import React from "react";
import Modal from "./Modal";
import styles from "./SignInModal.module.css";

interface SignInModalProps {
    onClose: () => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ onClose }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        onClose();
        alert('로그인 시도');
    };

    return(
        <Modal onClose={onClose}>
            <h2 className={styles.h2}>HashGame</h2>
            <form onSubmit={handleSubmit}>
            <div className={styles.inputContainer}>
                <input type="text" placeholder="Id" required className={styles.input}/>
                <input type="password" placeholder="Password" required className={styles.input}/>
            </div>
            <div className={styles.toolContainer}>
                <a href="/" className={styles.a}>아이디 찾기</a>
                <a href="/" className={styles.a}>비밀번호 재설정</a>
            </div>
            <button type="submit" className={styles.signInButton}>Sign-In</button>
            </form>
        </Modal>
    );
};

export default SignInModal;