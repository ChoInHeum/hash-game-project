import React from "react";
import styles from './Modal.module.css';

interface ModalProps {
    onClose: () => void;
    children: React.ReactNode;
}

const Modal : React.FC<ModalProps> = ({onClose, children}) => {
    return(
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;