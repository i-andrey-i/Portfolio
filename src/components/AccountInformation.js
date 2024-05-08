import React, {useEffect, useState} from "react";
import icon2 from "../img/user-icon-2.png";
import phone from "../img/phone.png";
import mail from "../img/mail.png";
import vk from "../img/vk.png";
import {getProfile} from "../api/ProfileApi";

const AccountInformation = props => {
    const [profileInfo, setProfileInfo] = useState(null);

    useEffect(() => {
        getProfile(props.id)
            .then((data) => {
                setProfileInfo(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [props.id]);

    if (!profileInfo) {
        return <div>Loading...</div>;
    }

    // TODO: инпуты поменяем на просто текст, изменение унесем куда-нибудь
    return (
        <section className="main-information-section" id="main-section-page">
            <div className="user">
                <img src={icon2} alt="" width="77" height="80"/>
                <p className="user-name">{profileInfo.data.name}</p>
            </div>
            <ul className="information-items">
                <li className="information-item-title">
                    <p className="information-text">Город:</p>
                    <input className="input-information" type="text" value={"NO_CITY"} disabled={!profileInfo.can_edit}
                           name="one-line" size="20"></input>
                </li>
                <li className="information-item-title">
                    <p className="information-text">Учебное заведение:</p>
                    <input className="input-information" type="text" value={profileInfo.data.education}
                           disabled={!profileInfo.can_edit} name="one-line"
                           size="20"></input>
                </li>
                <li className="information-item-description">
                    <p className="information-text">Описание:</p>
                    <textarea className="input-information-ds" value={profileInfo.data.description}
                              disabled={!profileInfo.can_edit} rows="5"></textarea>
                </li>

                <li className="information-item-contacts">
                    <p className="information-text">Контакты:</p>
                    <div className="contact">
                        <img className="contact-img" src={phone} alt="" width="24" height="24"/>
                        <input className="input-information-contact" type="text" value={profileInfo.data.phone_number}
                               disabled={!profileInfo.can_edit} name="one-line"
                               size="20"></input>
                    </div>

                    <div className="contact">
                        <img className="contact-img" src={mail} alt="" width="24" height="24"/>
                        <input className="input-information-contact" type="text" value={profileInfo.data.email}
                               disabled={!profileInfo.can_edit} name="one-line"
                               size="20"></input>
                    </div>

                    <div className="contact">
                        <img className="contact-img" src={vk} alt="" width="24" height="24"/>
                        <input className="input-information-contact" type="text" disabled={!profileInfo.can_edit}
                               name="one-line"
                               size="20"></input>
                    </div>
                </li>
            </ul>
            {profileInfo.can_edit && (
                <button>
                    <p className="information-item-change">Изменить</p>
                </button>
            )}
        </section>
    )
};

export default AccountInformation