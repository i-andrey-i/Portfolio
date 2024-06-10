import React from "react";
import {Modal} from "./Modal";
import styles from "../css/Form.module.css";
import {Form} from "./Form";

export const EditModal = ({isOpen, onClose, profileInfo}) => {

    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Form title={"Изменить"} buttonText={"Сохранить"} onSubmit={onSubmit}>
                <input id={"editName"} className={styles.FormField} placeholder={"Имя"}
                       defaultValue={profileInfo.name}/>
                <input id={"editEducation"} className={styles.FormField} placeholder={"Образование"}
                       defaultValue={profileInfo.education}/>
                <input id={"editPhone"} className={styles.FormField} placeholder={"Номер телефона"}
                       defaultValue={profileInfo.phone_number}/>
                <input id={"editEmail"} className={styles.FormField} placeholder={"Email"}
                       defaultValue={profileInfo.email}/>
                <textarea id={"editDescription"} className={`${styles.FormField} ${styles.BigFormField}`}
                          placeholder={"Описание"} defaultValue={profileInfo.description}/>
            </Form>
        </Modal>
    )
}