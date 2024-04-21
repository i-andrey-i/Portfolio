import React, { useState } from "react";
import { Link } from 'react-router-dom';

const UserRegistration = ({ handleClick, users, setUsers}) => {
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = () =>{
    const newUser = {email, password};
    setUsers([...users, newUser])
  }


    return (
      <center><div class="list-entry">
        <center>
          <h3 class="list-entry-name">РЕГИСТРАЦИЯ</h3>
          <input class="list-entry-input" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Эл. адрес" ></input>
          <input class="list-entry-input" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Пароль" ></input>
          <button class="list-entry-next" onClick={handleRegister}>Продолжить</button>
          <p class="list-entry-text"> Уже зарегистрированы? <Link to="*">Войдите</Link> в систему</p>
        </center>
      </div></center>
    );
};

export default UserRegistration;