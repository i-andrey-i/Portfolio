import React from "react";
import Header from "../components/Header";
import InfoAboutProject from "../components/InfoAboutProject";
import PicAboutProject from "../components/PicAboutProject";

const CreateWorkPage = () => (
    <div>
        <Header/>
        <center><h3 className="title-page-new">НОВЫЙ ПРОЕКТ</h3></center>
        <div className="two-section">
            <InfoAboutProject/>
            <PicAboutProject/>
        </div>
    </div>
);

export default CreateWorkPage