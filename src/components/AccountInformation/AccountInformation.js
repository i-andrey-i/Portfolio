import React, {useEffect, useState} from "react";
import styles from "./AccountInformation.module.css";
import {EditModal} from "../EditModal/EditModal";
import {EmailOutlined, PhoneOutlined} from "@mui/icons-material";
import {getProfilePicture, subscribeProfile, unsubscribeProfile} from "../../api/ProfileApi";
import {UploadImageModal} from "../UploadImageModal/UploadImageModal";

const AccountInformation = props => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isUpdateImageModalOpen, setIsUpdateImageModalOpen] = useState(false);
    const [profileImageSrc, setProfileImageSrc] = useState('');
    const [profileInfo, setProfileInfo] = useState(props.profileInfo);

    const userId = localStorage.getItem("userId");
    const isAuthorised = userId && userId !== "undefined";

    const toggleSubscription = () => {
        if (!isAuthorised)
            return;
        if (profileInfo.is_subscribed) {
            unsubscribeProfile(profileInfo.data.user_id)
                .then(data => setProfileInfo(data))
                .catch(error => console.log(error));
        } else {
            subscribeProfile(profileInfo.data.user_id)
                .then(data => setProfileInfo(data))
                .catch(error => console.log(error));
        }
    }

    useEffect(() => {
        setProfileInfo(props.profileInfo);
    }, [props.profileInfo]);

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
        getProfilePicture(profileInfo.data.user_id)
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
    }, [profileInfo.data.user_id]);


    return (
        <div id="accountInfo" className={styles.MainBlock}>
            <div className={styles.InfoHeader}>
                <div className={styles.PictureName}>
                    <div className={`${styles.ImageContainer} ${profileInfo.can_edit ? styles.Clickable : ""}`}>
                        {profileImageSrc &&
                            <img
                                onClick={profileInfo.can_edit ?
                                    () => setIsUpdateImageModalOpen(true) :
                                    () => true}
                                src={profileImageSrc} width="64"
                                height="64"/>}
                    </div>
                    <p>{profileInfo.data.name}</p>
                    {!profileInfo.can_edit && isAuthorised && (
                        <button
                            onClick={() => toggleSubscription()}
                            className={profileInfo.is_subscribed ? styles.UnsubscribeButton : styles.SubscribeButton}>
                            {profileInfo.is_subscribed ? "Отписаться" : "Подписаться"}
                        </button>)}
                </div>
                <ul className={styles.Counters}>
                    <li className={styles.Counter}>
                        <p>Подписчики</p>
                        <p>{profileInfo.data.subscribers_count}</p>
                    </li>
                    <li className={styles.Counter}>
                        <p>Публикации</p>
                        <p>{profileInfo.data.projects_count}</p>
                    </li>
                </ul>
            </div>
            <div className={styles.ProfileInfo}>
                <ul className={styles.Fields}>
                    {profileInfo.data.city && (
                        <li>
                            <p>Город:</p>
                            <p>{profileInfo.data.city}</p>
                        </li>
                    )}
                    {profileInfo.data.education && (
                        <li>
                            <p>Учебное заведение:</p>
                            <p>{profileInfo.data.education}</p>
                        </li>
                    )}
                    {profileInfo.data.description && (
                        <li>
                            <p>Описание:</p>
                            <p>{profileInfo.data.description}</p>
                        </li>
                    )}
                </ul>
                <div className={styles.ContactsBlock}>
                    <p>Контакты:</p>
                    <ul className={styles.Contacts}>
                        {profileInfo.data.phone_number && (
                            <li>
                                <PhoneOutlined/>
                                <p>{profileInfo.data.phone_number}</p>
                            </li>
                        )}
                        {profileInfo.data.email && (
                            <li>
                                <EmailOutlined/>
                                <p>{profileInfo.data.email}</p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div className={styles.ButtonBottom}>
                {profileInfo.can_edit && (
                    <button className={styles.Change} onClick={() => setIsEditModalOpen(true)}>Изменить</button>
                )}
            </div>
            <EditModal isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)}
                       profileInfo={profileInfo.data}/>
            <UploadImageModal isOpen={isUpdateImageModalOpen} onClose={() => setIsUpdateImageModalOpen(false)}/>
        </div>
    )
};

export default AccountInformation