import React, { useState } from "react";
import { Link, Routes, BrowserRouter as Router, useNavigate, } from 'react-router-dom';

import MainWorksPage from "./MainWorksPage";
import UserRegistration from "./UserRegistration";

const UserAutorization = ({ handleClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleLogin = () => {
    const userExists = ( "abc@mail.ru" === email && "123" === password);
    if (userExists) {
       return <Link to="/main"></Link>;
    } 
  };

  return(
    <center><div class="list-entry" >
      <center>
        <h3 class="list-entry-name">ВХОД</h3>
        <input class="list-entry-input" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Эл. адрес" ></input>
        <input class="list-entry-input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Пароль" ></input>
        <Link to="/main" onClick={handleLogin} class="list-entry-next">Продолжить</Link>
        <p class="list-entry-text"> 
                Еще не зарегистрированы? 
        <Link to="/reg"> Зарегистрируйтесь</Link>
              </p>
      </center>

    </div></center>
  )
}

export default UserAutorization