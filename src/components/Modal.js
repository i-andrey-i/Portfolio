import React, {useState} from "react";
import styles from "../css/Modal.module.css";
import {ReactComponent as CloseIcon} from "../img/closeIcon.svg";

export const Modal = ({isOpen, onClose, children}) => {

    return (
        <>
            {isOpen && (
                <div className={styles.Modal}>
                    <div className={styles.ModalWrapper}>
                        <div className={styles.ModalContent}>
                            <CloseIcon className={styles.CloseButton} onClick={() => onClose()}/>
                            {children}
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
