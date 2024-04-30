import React from "react";
import { Link } from 'react-router-dom';

class InfoAboutProject extends React.Component {
  render(){
    return(
        <div class="info-new-pr">
            <section class="all-info-sec">
                <p class="new-page-text"> Название проекта</p>
                <input class="new-page-info" type="text" placeholder="Введите название" name="one-line" size="40"></input>
            </section>

            <section class="all-info-sec-sp">
                <p class="new-page-text"> Описание проекта</p>
                <input class="new-page-info" type="text" placeholder="Введите описание" name="one-line" size="40"></input>
            </section>

            <section class="all-info-sec">
                <p class="new-page-text"> Дата создания проекта </p>
                <input class="new-page-info" type="text" placeholder="DD.MM.YY" name="one-line" size="40"></input>
            </section>

            <section class="all-info-sec">
                <p class="new-page-text"> Дополнительные файлы</p>
                <input class="new-page-info" type="text" placeholder="" name="one-line" size="40"></input>
            </section>

            <Link to="/main/my-page"><section class="create-new-project">
                <p class="new-page-text-create"> Сохранить проект </p>
            </section></Link>
        </div>
    )
  }
}

export default InfoAboutProject