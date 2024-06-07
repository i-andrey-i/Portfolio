import React from "react";
import {ReactComponent as HomeIcon} from "../img/homeIcon.svg";
import {ReactComponent as ProjectsIcon} from "../img/projectsIcon.svg";
import styles from "../css/AccountMenu.module.css"

const AccountMenu = props => {

    return (
        <div className={styles.AllShit}>
            <div className={styles.MainContainer}>
                <ul className={styles.ProfileNavigation}>
                    <li className={styles.ProfileNavigationItem}>
                        <HomeIcon/>
                        <p>Профиль</p>
                    </li>
                    <li className={styles.ProfileNavigationItem}>
                        <ProjectsIcon/>
                        <p>Работы</p>
                    </li>
                </ul>
                {props.can_edit && (
                    <div className={styles.ExitContainer}>
                        <button className={styles.Exit}>Выйти</button>
                    </div>
                )}
            </div>
            {props.can_edit && (
                <button className={styles.NewProject}>Новый проект</button>
            )}
        </div>

    );
}

export default AccountMenu
