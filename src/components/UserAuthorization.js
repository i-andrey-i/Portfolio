import React, {useEffect, useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {authUser} from "../api/AuthApi";

const UserAuthorization = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // отправка данных на сервер и получение токенов
        const data = await authUser(email, password);
        console.log(data);
        // сохранение токенов в localStorage
        localStorage.setItem('accessToken', data.access_token);

        // перенаправление на нужную страницу
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