import React, {useEffect} from "react";
import {Modal} from "../Modal/Modal";
import styles from "../Form/Form.module.css";
import {Form} from "../Form/Form";
import {useForm} from "react-hook-form";
import {updateProfile} from "../../api/ProfileApi";

export const EditModal = ({isOpen, onClose, profileInfo}) => {
    const {register, handleSubmit} = useForm({values: {...profileInfo}});

    const onSubmit = (formData) => {
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