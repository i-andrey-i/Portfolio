
import React from "react";
import workIMG from "./img/img-test.png";
import user from "./img/image 1 (1).png";

class EachWork extends React.Component {
  render(){
    return(
        <a href="none">
            <div class="user-info">
                <img src={user} alt="" width="38" height="38"/>
                <p class="name-user"> Имя пользователя</p>
            </div>
            <p class="title-of-my-work"> Название работы </p>
            <img class="img-of-work" src={workIMG} alt="Изображение работы" />
            <p class="description"> тут будет описание  </p>
            <time class="date" datetime="15.03.2024"> 15.03.2024 </time>
        </a>
    )
  }
}

export default EachWork

















