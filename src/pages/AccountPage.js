import React, {useEffect, useState} from "react";
import Header from "../components/Header"
import AccountInformation from "../components/AccountInformation";
import AccountMenu from "../components/AccountMenu";
import AccountWorksList from "../components/AccountWorksList";
import {useParams} from "react-router-dom";
import {getProfile} from "../api/ProfileApi";
import styles from "../css/AccountPage.module.css";

const AccountPage = () => {
    const [profileInfo, setProfileInfo] = useState(null);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        getProfile(id)
            .then((data) => {
                setProfileInfo(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [id]);

    if (!profileInfo) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Header/>
            <main>
                <article className={styles.TwoSections}>
                    <AccountMenu can_edit={profileInfo.can_edit}/>
                    <AccountInformation userId={id} profileInfo={profileInfo}/>
                </article>
                <AccountWorksList userId={id}/>
            </main>
        </div>
    )
};

export default AccountPage