import React from "react";
import {Link} from 'react-router-dom';
import logo from "../img/logo.png";
import icon from "../img/user-icon.png";

const Header = () => {
    const userId = localStorage.getItem("userId");

    return (
        <header>
            <nav className="navigation">
                <Link to="/" class="logo"><img src={logo} alt="" width="230" height="60"/></Link>

                <ul className="navigation-items">
                    <li className="search"><input className="input" type="text" placeholder="Поиск" name="one-line"
                                                  size="20"></input></li>
                    <li className="link"><Link to="/"><p className="link-text">Главная</p></Link></li>
                    <li className="link"><a href="#"><p className="link-text">Проекты</p></a></li>
                </ul>

                <Link to={userId ? `/profile/${userId}` : "/login"} class="profile-link">
                    <img className="img-profile-link" src={icon} alt="" width="42" height="42"/>
                    <p className="profile-link-text"> Мой профиль</p>
                </Link>
            </nav>
        </header>
    )
}

export default Header