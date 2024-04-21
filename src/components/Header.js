import React from "react";
import { Link } from 'react-router-dom';
import logo from "./img/logo.png";
import icon from "./img/user-icon.png";

class Header extends React.Component {
  render(){
    return(
        <header>
            <nav class="navigation">
                <Link to="/main" class="logo" ><img src={logo} alt="" width="230" height="60"/></Link>

                <ul class="navigation-items">
                    <li class="search"><input class="input" type="text" placeholder="Поиск" name="one-line" size="20"></input></li>
                    <li class="link"><Link to="/main"><p class="link-text">Главная</p></Link></li>
                    <li class="link"><a href="none"><p class="link-text">Проекты</p></a></li>
                </ul>

                <Link to="/main/my-page" class="profile-link">
                    <img class="img-profile-link" src={icon} alt="" width="42" height="42"/>
                    <p class="profile-link-text"> Мой профиль</p>
                </Link>
            </nav>
        </header>
    )
  }
}

export default Header