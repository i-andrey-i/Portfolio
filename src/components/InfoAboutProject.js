import React from "react";
import {Link} from 'react-router-dom';

const InfoAboutProject = () => (
    <div className="info-new-pr">
        <section className="all-info-sec">
            <p className="new-page-text"> Название проекта</p>
            <input className="new-page-info" type="text" placeholder="Введите название" name="one-line"
                   size="40"></input>
        </section>

        <section className="all-info-sec-sp">
            <p className="new-page-text"> Описание проекта</p>
            <input className="new-page-info" type="text" placeholder="Введите описание" name="one-line"
                   size="40"></input>
        </section>

        <section className="all-info-sec">
            <p className="new-page-text"> Дата создания проекта </p>
            <input className="new-page-info" type="text" placeholder="DD.MM.YY" name="one-line" size="40"></input>
        </section>

        <section className="all-info-sec">
            <p className="new-page-text"> Дополнительные файлы</p>
            <input className="new-page-info" type="text" placeholder="" name="one-line" size="40"></input>
        </section>

        <Link to="/auto/my-page">
            <section className="create-new-project">
                <p className="new-page-text-create"> Сохранить проект </p>
            </section>
        </Link>
    </div>
);

export default InfoAboutProject