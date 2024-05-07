import React from "react";
import Header from "./Header";
import InfoAboutProject from "./InfoAboutProject";
import PicAboutProject from "./PicAboutProject";

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