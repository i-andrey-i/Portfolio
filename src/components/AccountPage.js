import React from "react";
import Header from "./Header"
import AccountInformation from "./AccountInformation";
import AccountMenu from "./AccountMenu";
import AccountWorksList from "./AccountWorksList";
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