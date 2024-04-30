import React from "react";
import { Link } from 'react-router-dom';
import Header from "./Header";
import icon2 from "./img/user-icon-2.png";

class EachWorkPage extends React.Component {
  render(){
    return(
        <div>
            <Header/>
            <div class="info-about-work">
                <section class="user">
                        <img src={icon2} alt="" width="77" height="80"/>
                        <p class="user-name">ФИО</p>
                </section>

                <section class="description-of-work">
                    <center class="work-title-each"> Название проекта </center>
                    <p class="text-of-work-descr"> ОПИСАНИЕ </p>
                    <p class="date-work-new"> Дата создания: <data class="data-creation"> DD.MM.YY </data> </p>
                </section>

                <section class="picture-of-work">
                    <p class="text-in-pic"> Изображение 1</p>
                </section>

                <section class="picture-of-work">
                    <p class="text-in-pic"> Изображение 2</p>
                </section>

                <section class="special-matirial">
                    <p class="title-of-dop"> Дополнительные материалы </p>
                    <ul>
                        <li class="dop-nat-each"> page.txt</li>
                        <li class="dop-nat-each"> pic.img </li>
                        <li class="dop-nat-each"> audio.mp3 </li>
                    </ul>
                </section>
            </div>
        </div>
    )
  }
}

export default EachWorkPage