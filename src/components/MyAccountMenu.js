import React from "react";
import { Link } from 'react-router-dom';
import dec1 from "./img/decor-1.png";
import dec2 from "./img/decor-2.png";

class MyAccountMenu extends React.Component {
  render(){
    return(
      <div class="right-section">
        <ul class="right-section-navigation">
            <li class="right-section-items"><a class="link-text" href="none"> <img class="decor-element" src={dec1} alt="" width="23" height="23"/>Мои данные</a></li>
            <li class="right-section-items"><a class="link-text" href="none"> <img class="decor-element" src={dec2} alt="" width="23" height="23"/> Мои работы</a></li>
            <li class="right-section-items-new"><Link to="/main/my-page/create-work" class="tetx-new-work" > Новый проект </Link></li>
        </ul>
        <Link to="*" class="right-section-enter"> Выйти </Link>
      </div>
      

    )
  }
}

export default MyAccountMenu
