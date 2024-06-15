import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {getMe, registerUser} from "../../api/AuthApi";
import styles from "../../components/Form/Form.module.css";
import {Form} from "../../components/Form/Form";
import {useForm} from "react-hook-form";

const UserRegistration = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        registerUser(formData)
            .then(data => {
                if (data.access_token != null) {
                    localStorage.setItem('accessToken', data.access_token);
                    getMe()
                        .then(data => {
                            if (data.id != null) {
                                localStorage.setItem("userId", data.id);
                                navigate("/profile/create");
                            } else {
                                localStorage.removeItem("accessToken");
                            }
                        })
                        .catch(error => console.log(error));
                }
            })
            .catch(error => console.log(error));
    };

    return (
        <div className={styles.FormPage}>
            <div className={styles.FormContainer}>
                <Form title={"Регистрация"} buttonText={"Продолжить"} onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.FormField} placeholder={"Email"}
                           {...register("email")}/>
                    <input type={"password"} className={styles.FormField} placeholder={"Пароль"}
                           {...register("password")}/>
                </Form>
                <div className={styles.DownText}>
                    <p>Уже зарегистрированы?</p>
                    <Link to={"/login"}>Войдите</Link>
                    <p>в систему</p>
                </div>
            </div>
        </div>
    )
};

export default UserRegistration;