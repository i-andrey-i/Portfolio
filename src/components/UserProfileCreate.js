import React, { useState } from "react";
import {Link, useNavigate} from 'react-router-dom';
import {createProfile} from "../api/ProfileApi";

const UserProfileCreate = () => {
    const navigate = useNavigate();
    const [user,setUser] = useState("");
    const [city,setCity] = useState("");
    const [study,setStudy] = useState("");
    const [phone,setPhone] = useState("");
    const [vK,setVK] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // отправка данных на сервер и получение токенов
        const data = await createProfile(user);

        // перенаправление на нужную страницу
        navigate('*');
    }

    return (
      <center><div className="list-entry">
        <center>
          <h3 className="list-entry-name">РЕГИСТРАЦИЯ</h3>
          <form onSubmit={handleSubmit}>
            <input className="list-entry-input" type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="ФИО" ></input>
            <input className="list-entry-input" type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Населенный пункт" ></input>
            <input className="list-entry-input" type="text" name="study" value={study} onChange={(e) => setStudy(e.target.value)} placeholder="Учебное заведение" ></input>
            <input className="list-entry-input" type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Номер телефона" ></input>
            <input className="list-entry-input" type="text" name="vk" value={vK} onChange={(e) => setVK(e.target.value)} placeholder="VK" ></input>
            <Link to="/profile/:id"  class="list-entry-next" type="submit"> Готово </Link>
          </form>
        </center>
      </div></center>
    );
};

export default UserProfileCreate;