import React from "react";
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from "../img/Logo.svg";
import {ReactComponent as ProfileIcon} from "../img/profileIcon.svg";
import {ReactComponent as DropdownArrow} from "../img/dropdownArrow.svg";
import styles from "../css/Header.module.css";

const Header = () => {
    const userId = localStorage.getItem("userId");
    if (userId === "undefined") {
        localStorage.removeItem("userId");

    }
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

                <Link to={userId && userId !== "undefined" ? `/profile/${userId}` : "/login"}
                      className={`${styles.buttonWithIcon} ${styles.profileButton}`}>
                    <ProfileIcon width="42" height="42"/>
                    <p className=""> Мой профиль</p>
                    <DropdownArrow/>
                </Link>
            </nav>
        </header>
    )
}

export default Header