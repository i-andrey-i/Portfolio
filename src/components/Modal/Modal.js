import React, {useState} from "react";
import styles from "./Modal.module.css";
import {CloseOutlined} from "@mui/icons-material";

export const Modal = ({isOpen, onClose, children}) => {

    return (
        <>
            {isOpen && (
                <div className={styles.Modal}>
                    <div className={styles.ModalWrapper}>
                        <div className={styles.ModalContent}>
                            <CloseOutlined className={styles.CloseButton} onClick={() => onClose()}/>
                            {children}
                        </div>
                    </div>
                </div>
            )
            }
        </>
    )
}
