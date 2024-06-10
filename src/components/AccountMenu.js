import React from "react";
import styles from "../css/AccountMenu.module.css"
import {logout} from "../api/Utils";
import {useNavigate} from "react-router-dom";
import {BusinessCenterSharp, HomeOutlined} from "@mui/icons-material";

const AccountMenu = props => {
    const navigate = useNavigate();

    return (
        <div className={styles.AllShit}>
            <div className={styles.MainContainer}>
                <ul className={styles.ProfileNavigation}>
                    <li className={styles.ProfileNavigationItem}>
                        <HomeOutlined/>
                        <a href="#accountInfo">Профиль</a>
                    </li>
                    <li className={styles.ProfileNavigationItem}>
                        <BusinessCenterSharp/>
                        <a href="#worksPicture">Работы</a>
                    </li>
                </ul>
                {props.can_edit && (
                    <div className={styles.ExitContainer}>
                        <button onClick={() => logout()} className={styles.Exit}>Выйти</button>
                    </div>
                )}
            </div>
            {props.can_edit && (
                <button onClick={() => navigate("/project/create")} className={styles.NewProject}>Новый проект</button>
            )}
        </div>

    );
}

export default AccountMenu
