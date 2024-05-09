import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {authUser, getMe} from "../api/AuthApi";

const UserAuthorization = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // отправка данных на сервер и получение токенов
        const data = await authUser(email, password);

        // сохранение токенов в localStorage
        if (data.access_token != null) {
            console.log("Saving data to localStorage");
            localStorage.setItem('accessToken', data.access_token);

            const userInfo = await getMe(); // TODO: Вся эта логика должна дублироваться для регистрации, возможно стоит вынести
            if (userInfo.id != null) {
                localStorage.setItem("userId", userInfo.id);
            } else {
                localStorage.removeItem("accessToken");
            }
        }
        navigate('/auto/my-page');
    }

    return (
        <center>
            <div className="list-entry">
                <center>
                    <h3 className="list-entry-name">ВХОД</h3>
                    <form onSubmit={handleSubmit}>
                        <input className="list-entry-input" type="email" name="email" value={email}
                               onChange={(e) => setEmail(e.target.value)} placeholder="Эл. адрес"></input>
                        <input className="list-entry-input" type="password" name="password" value={password}
                               onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"></input>
                        <button className="list-entry-next" type="submit">Продолжить</button>
                    </form>

                    <p className="list-entry-text"> Еще не зарегистрированы? <Link
                        to="/signup"> Зарегистрируйтесь</Link></p>
                </center>

            </div>
        </center>
    )
}

export default UserAuthorization;