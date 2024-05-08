import React from "react";
import Header from "../components/Header"
import AccountInformation from "../components/AccountInformation";
import AccountMenu from "../components/AccountMenu";
import AccountWorksList from "../components/AccountWorksList";
import {useParams} from "react-router-dom";

const AccountPage = () => {
    const params = useParams();
    const id = params.id;

    return (
        <div>
            <Header/>
            <main>
                <article className="two-sections">
                    <AccountMenu/>
                    <AccountInformation id={id}/>
                </article>
                <AccountWorksList id={id}/>
            </main>
        </div>
    )
};

export default AccountPage