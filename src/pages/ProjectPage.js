import React from "react";
import Header from "../components/Header";
import icon2 from "../img/user-icon-2.png";

const ProjectPage = () => (
    <div>
        <Header/>
        <div className="info-about-work">
            <section className="user">
                <img src={icon2} alt="" width="77" height="80"/>
                <p className="user-name">ФИО</p>
            </section>

            <section className="description-of-work">
                <center className="work-title-each"> Название проекта</center>
                <p className="text-of-work-descr"> ОПИСАНИЕ </p>
                <p className="date-work-new"> Дата создания: <data className="data-creation"> DD.MM.YY </data></p>
            </section>

            <section className="picture-of-work">
                <p className="text-in-pic"> Изображение 1</p>
            </section>

            <section className="picture-of-work">
                <p className="text-in-pic"> Изображение 2</p>
            </section>

            <section className="special-matirial">
                <p className="title-of-dop"> Дополнительные материалы </p>
                <ul>
                    <li className="dop-nat-each"> page.txt</li>
                    <li className="dop-nat-each"> pic.img</li>
                    <li className="dop-nat-each"> audio.mp3</li>
                </ul>
            </section>
        </div>
    </div>
);

export default ProjectPage