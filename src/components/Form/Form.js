import React from "react";
import styles from "./Form.module.css"

export const Form = ({title, children, buttonText, ...props}) => {

    return (
        <form className={styles.Form} {...props}>
            <h2 className={styles.FormTitle}>{title}</h2>
            {children}
            <button className={styles.FormButton}>{buttonText}</button>
        </form>
    )
}