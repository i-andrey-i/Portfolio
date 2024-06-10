import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import {ReactComponent as Logo} from "../img/Logo.svg";
import {ReactComponent as ProfileIcon} from "../img/profileIcon.svg";
import {ReactComponent as DropdownArrow} from "../img/dropdownArrow.svg";
import {ReactComponent as LoginIcon} from "../img/LoginIcon.svg";
import {ReactComponent as LogoutIcon} from "../img/LogoutIcon.svg";
import {ReactComponent as AddPostIcon} from "../img/AddPostIcon.svg";
import styles from "../css/Header.module.css";
import {getMe} from "../api/AuthApi";
import {logout} from "../api/Utils";

const Header = () => {
    const navigate = useNavigate();

    const userId = localStorage.getItem("userId");
    const isAuthorised = userId && userId !== "undefined";

    if (userId === "undefined") {
        logout();
    }

    getMe()
        .then(data => {
            if (localStorage.getItem("accessToken") && data.detail === "Could not validate credentials") {
                logout();
            }
        });

    return (
        <header>
            <nav className={styles.navigation}>
                <Link to="/" className={styles.mainLogo}>
                    <Logo/>
                    <p className={styles.mainTitle}>MY Portfolio</p>
                </Link>

                <ul className={styles.navigationItems}>
                    <li className={`${styles.searchWithIcon} ${styles.loupe} ${styles.navItem}`}>
                        <input className={`${styles.search} ${styles.input}`} type="text" placeholder="Поиск"></input>
                    </li>
                </ul>

                <div className={styles.dropdown}>
                    <Link to={isAuthorised ? `/profile/${userId}` : "/login"}
                          className={`${styles.buttonWithIcon} ${styles.profileButton} ${styles.dropdownButton}`}>
                        {isAuthorised ? <ProfileIcon width="42" height="42"/> : <LoginIcon width="42" height="42"/>}
                        <p className="">{isAuthorised ? "Мой профиль" : "Войти"}</p>
                        {isAuthorised && <DropdownArrow/>}
                    </Link>
                    {isAuthorised &&
                        <ul className={styles.dropdownContent}>
                            <li>
                                <button onClick={() => navigate("/project/create")}><AddPostIcon width="21"
                                                                                                 height="21"/>Новый
                                    проект
                                </button>
                            </li>
                            <li>
                                <button onClick={() => logout()}><LogoutIcon width="21" height="21"/>Выйти</button>
                            </li>
                        </ul>
                    }
                </div>
            </nav>
        </header>
    )
}

export default Header