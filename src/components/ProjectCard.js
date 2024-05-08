import React from "react";
import workIMG from "../img/img-test.png";
import user from "../img/image 1 (1).png";

const ProjectCard = props => {
    return (
        <a href="#">
            <div className="user-info">
                <img src={user} alt="" width="38" height="38"/>
                <p className="name-user">{"Add UserName to Project"}</p>
            </div>
            <p className="title-of-my-work">{props.title}</p>
            <img className="img-of-work" src={workIMG} alt="Изображение работы"/>
            <p className="description">{props.description}</p>
            <time className="date" dateTime="15.03.2024">15.03.2024</time>
        </a>
    );
}

export default ProjectCard