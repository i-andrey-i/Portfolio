import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {authUser, getMe} from "../../api/AuthApi";
import {useForm} from "react-hook-form";
import {Form} from "../../components/Form/Form";
import styles from "../../components/Form/Form.module.css";

const UserAuthorization = () => {
    const {register, handleSubmit} = useForm();
    const navigate = useNavigate();

    const onSubmit = (formData) => {
        authUser(formData)
            .then(data => {
                if (data.access_token != null) {
                    localStorage.setItem('accessToken', data.access_token);
                    getMe()
                        .then(data => {
                            if (data.id != null) {
                                localStorage.setItem("userId", data.id);
                                navigate(`/profile/${data.id}`);
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
                <Form title={"Вход"} buttonText={"Продолжить"} onSubmit={handleSubmit(onSubmit)}>
                    <input className={styles.FormField} placeholder={"Email"}
                           {...register("email")}/>
                    <input type={"password"} className={styles.FormField} placeholder={"Пароль"}
                           {...register("password")}/>
                </Form>
                <div className={styles.DownText}>
                    <p>Ещё не зарегистрированы?</p>
                    <Link to={"/signup"}>Зарегистрируйтесь</Link>
                </div>
            </div>
        </div>
    )
}

export default UserAuthorization;