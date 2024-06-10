import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {registerUser} from "../api/AuthApi";
import styles from "../css/Form.module.css";
import {Form} from "../components/Form";
import {useForm} from "react-hook-form";

const UserRegistration = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     // отправка данных на сервер и получение токенов
    //     const data = await registerUser(email, password);
    //
    //     console.log(data);
    //     // сохранение токенов в localStorage
    //     localStorage.setItem('accessToken', data.access_token);
    //
    //     // перенаправление на нужную страницу
    //     navigate('profile/create');
    // }

    return (
        <div className={styles.FormPage}>
            <div className={styles.FormContainer}>
                <Form title={"Регистрация"} buttonText={"Продолжить"} onSubmit={handleSubmit()}>
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