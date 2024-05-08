import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Loupe} from "../img/Loupe.svg";
import {ReactComponent as Logo} from "../img/Logo.svg";
import {ReactComponent as ProfileIcon} from "../img/profileIcon.svg";
import {ReactComponent as DropdownArrow} from "../img/dropdownArrow.svg";

const Header = () => {
    const userId = localStorage.getItem("userId");

    return (
        <header>
            <nav className="navigation">
                <Link to="/" className="main-logo">
                    <Logo/>
                    <p className="main-title">MY Portfolio</p>
                </Link>

                <ul className="navigation-items">
                    <li className="search-with-icon loupe nav-item">
                        <input className="search input" type="text" placeholder="Поиск"></input>
                    </li>
                    <li className="link nav-item">
                        <Link to="/"><p className="link-text">Главная</p></Link>
                    </li>
                    <li className="link nav-item">
                        <a href="#"><p className="link-text">Проекты</p></a>
                    </li>
                </ul>

                <Link to={userId ? `/profile/${userId}` : "/login"} className="button-with-icon profile-button">
                    <ProfileIcon width="42" height="42"/>
                    <p className=""> Мой профиль</p>
                    <DropdownArrow/>
                </Link>
            </nav>
        </header>
    )
}

export default Header