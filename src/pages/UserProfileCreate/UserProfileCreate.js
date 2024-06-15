import React from "react";
import {useNavigate} from 'react-router-dom';
import {createProfile} from "../../api/ProfileApi";
import {useForm} from "react-hook-form";
import styles from "../../components/Form/Form.module.css";
import {Form} from "../../components/Form/Form";

const UserProfileCreate = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        createProfile(formData)
            .then(navigate("/"))
            .catch(error => console.log(error));
    }

    return (
        <div className={styles.FormPage}>
            <div className={styles.FormContainer}>
                <Form title={"Регистрация"} buttonText={"Готово"} onSubmit={handleSubmit(onSubmit)}>
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
            </div>
        </div>
    );
};

export default UserProfileCreate;