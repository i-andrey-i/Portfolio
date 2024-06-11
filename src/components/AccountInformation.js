import React, {useEffect, useState} from "react";
import styles from "../css/AccountInformation.module.css";
import {EditModal} from "./EditModal";
import {EmailOutlined, PhoneOutlined} from "@mui/icons-material";
import {getProfilePicture} from "../api/ProfileApi";
import {UploadImageModal} from "./UploadImageModal";

const AccountInformation = props => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isUpdateImageModalOpen, setIsUpdateImageModalOpen] = useState(false);
    const [profileImageSrc, setProfileImageSrc] = useState('');

    const userId = localStorage.getItem("userId");
    const isAuthorised = userId && userId !== "undefined";

    useEffect(
        () => {
            if (isEditModalOpen || isUpdateImageModalOpen) {
                document.body.style.overflowY = "hidden";
            } else {
                document.body.style.overflowY = "scroll";
            }
        },
        [isEditModalOpen, isUpdateImageModalOpen]
    );

    useEffect(() => {
        getProfilePicture(props.profileInfo.data.user_id)
            .then(blob => {
                const objectUrl = URL.createObjectURL(blob);
                setProfileImageSrc(objectUrl);
            })
            .catch(error => console.log(error));

        return () => {
            if (profileImageSrc) {
                URL.revokeObjectURL(profileImageSrc);
            }
        };
    }, []);

    return (
        <div id="accountInfo" className={styles.MainBlock}>
            <div className={styles.InfoHeader}>
                <div className={styles.PictureName}>
                    <div className={`${styles.ImageContainer} ${props.profileInfo.can_edit ? styles.Clickable : ""}`}>
                        {profileImageSrc &&
                            <img
                                onClick={props.profileInfo.can_edit ?
                                    () => setIsUpdateImageModalOpen(true) :
                                    () => true}
                                src={profileImageSrc} width="64"
                                height="64"/>}
                    </div>
                    <p>{props.profileInfo.data.name}</p>
                    {!props.profileInfo.can_edit && isAuthorised && (
                        <button className={styles.SubscribeButton}>Подписаться</button>)}
                </div>
                <ul className={styles.Counters}>
                    <li className={styles.Counter}>
                        <p>Подписчики</p>
                        <p>{props.profileInfo.data.projects_count}</p>
                    </li>
                    <li className={styles.Counter}>
                        <p>Публикации</p>
                        <p>{props.profileInfo.data.projects_count}</p>
                    </li>
                </ul>
            </div>
            <div className={styles.ProfileInfo}>
                <ul className={styles.Fields}>
                    {props.profileInfo.data.city && (
                        <li>
                            <p>Город:</p>
                            <p>{props.profileInfo.data.city}</p>
                        </li>
                    )}
                    {props.profileInfo.data.education && (
                        <li>
                            <p>Учебное заведение:</p>
                            <p>{props.profileInfo.data.education}</p>
                        </li>
                    )}
                    {props.profileInfo.data.description && (
                        <li>
                            <p>Описание:</p>
                            <p>{props.profileInfo.data.description}</p>
                        </li>
                    )}
                </ul>
                <div className={styles.ContactsBlock}>
                    <p>Контакты:</p>
                    <ul className={styles.Contacts}>
                        {props.profileInfo.data.phone_number && (
                            <li>
                                <PhoneOutlined/>
                                <p>{props.profileInfo.data.phone_number}</p>
                            </li>
                        )}
                        {props.profileInfo.data.email && (
                            <li>
                                <EmailOutlined/>
                                <p>{props.profileInfo.data.email}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.ButtonBottom}>
                {props.profileInfo.can_edit && (
                    <button className={styles.Change} onClick={() => setIsEditModalOpen(true)}>Изменить</button>
                )}
            </div>
            <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}
                       profileInfo={props.profileInfo.data}/>
            <UploadImageModal isOpen={isUpdateImageModalOpen} onClose={() => setIsUpdateImageModalOpen(false)}/>
        </div>
    )
};

export default AccountInformation