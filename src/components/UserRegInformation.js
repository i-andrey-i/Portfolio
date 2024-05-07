import React, { useState } from "react";
import { Link } from 'react-router-dom';
import handleSubmit3 from "./RegApi2page";

const UserRegInformation = () => {
    const [user,setUser] = useState("");
    const [city,setCity] = useState("");
    const [study,setStudy] = useState("");
    const [phone,setPhone] = useState("");
    const [vK,setVK] = useState("");

    return (
      <center><div class="list-entry">
        <center>
          <h3 class="list-entry-name">РЕГИСТРАЦИЯ</h3>
          <form onSubmit={handleSubmit3}>
            <input class="list-entry-input" type="text" name="user" value={user} onChange={(e) => setUser(e.target.value)} placeholder="ФИО" ></input>
            <input class="list-entry-input" type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} placeholder="Населенный пункт" ></input>
            <input class="list-entry-input" type="text" name="study" value={study} onChange={(e) => setStudy(e.target.value)} placeholder="Учебное заведение" ></input>
            <input class="list-entry-input" type="number" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Номер телефона" ></input>
            <input class="list-entry-input" type="text" name="vk" value={vK} onChange={(e) => setVK(e.target.value)} placeholder="VK" ></input>
            <Link to="/auto/my-page"  class="list-entry-next" type="submit"> Готово </Link>
          </form>
        </center>
      </div></center>
    );
};

export default UserRegInformation;