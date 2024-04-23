import React, { useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

import MainWorksPage from "./MainWorksPage";
import UserRegistration from "./UserRegistration";

function UserAutorization() {
  
  const [data, setData] = useState({
    email: '',
    password: ''
    });
   
    const handleSubmit = (event) => {
      event.preventDefault();
      const formData = new FormData(event.target);
  
      axios.post('ссылка', formData)
        .then((response) => {
          setData(response.data);
        })};

  return(
    <center><div class="list-entry" >
      <center>
        <h3 class="list-entry-name">ВХОД</h3>
        <form onSubmit={handleSubmit}>
          <input class="list-entry-input" type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})} placeholder="Эл. адрес" ></input>
          <input class="list-entry-input" type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})} placeholder="Пароль" ></input>
        </form>
          
        <button class="list-entry-next" type="submit" >Продолжить</button>
        <p class="list-entry-text"> Еще не зарегистрированы? <Link to="/reg"> Зарегистрируйтесь</Link></p>
      </center>

    </div></center>
  )
}

export default UserAutorization