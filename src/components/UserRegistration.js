import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import {registerUser} from "../api/AuthApi";

const UserRegistration = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // отправка данных на сервер и получение токенов
        const data = await registerUser(email, password);

        console.log(data);
        // сохранение токенов в localStorage
        localStorage.setItem('accessToken', data.access_token);

        // перенаправление на нужную страницу
        navigate('profile/create');
    }

    return (
        <center>
            <div className="list-entry">
                <center>
                    <h3 className="list-entry-name">РЕГИСТРАЦИЯ</h3>
                    <form onSubmit={handleSubmit}>
                        <input className="list-entry-input" type="email" name="username" value={email}
                               onChange={(e) => setEmail(e.target.value)} placeholder="Эл. адрес"></input>
                        <input className="list-entry-input" type="password" name="email" value={password}
                               onChange={(e) => setPassword(e.target.value)} placeholder="Пароль"></input>
                        <Link to="/auto/reg/inf" class="list-entry-next" type="submit">Продолжить</Link>
                    </form>
                    <p className="list-entry-text"> Уже зарегистрированы? <Link to="/auto">Войдите</Link> в систему</p>
                </center>
            </div>
        </center>
    );
};

export default UserRegistration;