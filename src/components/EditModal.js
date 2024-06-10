import React from "react";
import {Modal} from "./Modal";
import styles from "../css/Form.module.css";
import {Form} from "./Form";
import {useForm} from "react-hook-form";
import {updateProfile} from "../api/ProfileApi";

export const EditModal = ({isOpen, onClose, profileInfo}) => {
    const {register, handleSubmit} = useForm({defaultValues: {...profileInfo}});

    const onSubmit = (formData) => {
        console.log(formData);
        updateProfile(formData)
            .then(onClose)
            .catch(error => console.log(error));
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Form title={"Изменить"} buttonText={"Сохранить"} onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.FormField} placeholder={"Имя"}
                       {...register("name")}/>
                <input className={styles.FormField} placeholder={"Образование"}
                       {...register("education")}/>
                <input className={styles.FormField} placeholder={"Номер телефона"}
                       {...register("phone_number")}/>
                <input className={styles.FormField} placeholder={"Email"}
                       {...register("email")}/>
                <textarea className={`${styles.FormField} ${styles.BigFormField}`}
                          placeholder={"Описание"} {...register("description")}/>
            </Form>
        </Modal>
    )
}