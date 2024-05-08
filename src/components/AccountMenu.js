import React from "react";
import {Link} from 'react-router-dom';
import dec1 from "../img/decor-1.png";
import dec2 from "../img/decor-2.png";

const AccountMenu = () => (
    <div className="right-section">
        <ul className="right-section-navigation">
            <li className="right-section-items"><a className="link-text" href="#"> <img className="decor-element"
                                                                                        src={dec1} alt="" width="23"
                                                                                        height="23"/>Мои данные</a>
            </li>
            <li className="right-section-items"><a className="link-text" href="#"> <img className="decor-element"
                                                                                        src={dec2} alt="" width="23"
                                                                                        height="23"/> Мои работы</a>
            </li>
            <li className="right-section-items-new"><Link to="/auto/my-page/create-work"
                                                          className="tetx-new-work"> Новый проект </Link></li>
        </ul>
        <Link to="*" className="right-section-enter"> Выйти </Link>
    </div>


);

export default AccountMenu
