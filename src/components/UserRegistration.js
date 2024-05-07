import React, { useState } from "react";
import { Link } from 'react-router-dom';
import handleSubmit2 from "./RegApi";

const UserRegistration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

    return (
      <center><div class="list-entry">
        <center>
          <h3 class="list-entry-name">РЕГИСТРАЦИЯ</h3>
          <form onSubmit={handleSubmit2}>
            <input class="list-entry-input" type="email"  name="username" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Эл. адрес" ></input>
            <input class="list-entry-input" type="password" name="email" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" ></input>
            <Link to="/auto/reg/inf"  class="list-entry-next" type="submit">Продолжить</Link>
          </form>
          <p class="list-entry-text"> Уже зарегистрированы? <Link to="/auto">Войдите</Link> в систему</p>
        </center>
      </div></center>
    );
};

export default UserRegistration;