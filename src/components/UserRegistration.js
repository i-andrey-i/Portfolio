import React, { useState } from "react";
import { Link } from 'react-router-dom';

const UserRegistration = () => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");


    return (
      <center><div class="list-entry">
        <center>
          <h3 class="list-entry-name">РЕГИСТРАЦИЯ</h3>
          <input class="list-entry-input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Эл. адрес" ></input>
          <input class="list-entry-input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Пароль" ></input>
          <Link to="/main"  class="list-entry-next">Продолжить</Link>
          <p class="list-entry-text"> Уже зарегистрированы? <Link to="*">Войдите</Link> в систему</p>
        </center>
      </div></center>
    );
};

export default UserRegistration;