import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import MainWorksPage from "./MainWorksPage";
import UserRegistration from "./UserRegistration";

function UserAutorization() {
  
  const [person, setPerson] = useState({ username: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('ссылка', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(person)
    });

    const data = await response.json();
    console.log(data);
  };

  const handleChange = (e) => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value
    });
  };

  return(
    <center><div class="list-entry" >
      <center>
        <h3 class="list-entry-name">ВХОД</h3>
        <form onSubmit={handleSubmit}>
          <input class="list-entry-input" type="email" value={person.email} onChange={handleChange} placeholder="Эл. адрес" ></input>
          <input class="list-entry-input" type="password" value={person.password} onChange={handleChange} placeholder="Пароль" ></input>
          <button class="list-entry-next" type="submit" >Продолжить</button>
        </form>
        
        <p class="list-entry-text"> Еще не зарегистрированы? <Link to="/reg"> Зарегистрируйтесь</Link></p>
      </center>

    </div></center>
  )
}

export default UserAutorization