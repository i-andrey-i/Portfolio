import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import MainWorksPage from "./MainWorksPage";
import UserRegistration from "./UserRegistration";

function UserAuthorization() {
  
  const [person, setPerson] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('{host]/auth/login', {
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
    <center><div className="list-entry" >
      <center>
        <h3 className="list-entry-name">ВХОД</h3>
        <form onSubmit={handleSubmit}>
          <input className="list-entry-input" type="email" name="email" value={person.email} onChange={handleChange} placeholder="Эл. адрес" ></input>
          <input className="list-entry-input" type="password" name="password" value={person.password} onChange={handleChange} placeholder="Пароль" ></input>
          <button className="list-entry-next" type="submit" >Продолжить</button>
        </form>
        
        <p className="list-entry-text"> Еще не зарегистрированы? <Link to="/reg"> Зарегистрируйтесь</Link></p>
      </center>

    </div></center>
  )
}

export default UserAuthorization