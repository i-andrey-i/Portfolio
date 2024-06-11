import React from 'react';
import {Modal} from "./Modal";
import {Form} from "./Form";
import {useForm} from "react-hook-form";
import styles from "../css/Form.module.css";
import {updateProfilePicture} from "../api/ProfileApi";

export const UploadImageModal = ({isOpen, onClose}) => {
    const {register, handleSubmit} = useForm();

    const onSubmit = (formData) => {
        let body = new FormData();
        body.append("file", formData.file[0]);
        console.log(body);
        updateProfilePicture(body)
            .then(() =>
                window.location.reload()
            )
            .catch(error => {
                console.log(error);
            });
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <Form title={"Загрузить фото"} buttonText={"Отправить"} onSubmit={handleSubmit(onSubmit)}>
                <input className={styles.FormField} type="file" {...register("file")}/>
            </Form>
        </Modal>
    )
};