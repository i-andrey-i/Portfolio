import React from "react";
import workIMG from "../img/img-test.png";
import user from "../img/image 1 (1).png";
import {ReactComponent as ThumbUp} from "../img/ThumbUp.svg";
import {ReactComponent as Comment} from "../img/Comment.svg";
import {Link} from "react-router-dom";

const ProjectCard = props => {
    const {project, showUserInfo} = props;
    const date = new Date(project.data.created_at);
    const formattedDate = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'});
    return (
        <div className="project-card">
            {showUserInfo && (
                <Link to={`/profile/${project.data.user_id}`}><div className="user-info">

                        <img src={user} alt="" width="38" height="38"/>
                        <p className="username">{project.data.username}</p>

                </div></Link>
            )}
            <div className="project-info">
                <p className="project-title">{project.data.title}</p>
                <img className="project-preview" src={workIMG} alt="Изображение работы"/>
                <p className="project-description">{project.data.description}</p>
                <div className="project-meta">
                    <time className="project-created-at" dateTime={project.data.created_at}>{formattedDate}</time>
                    <div className="icon-with-text project-likes">
                        <span>{project.data.likes_count}</span>
                        <ThumbUp className="icon"/>
                    </div>
                    <div className="icon-with-text project-comments">
                        <span>{project.data.comments_count}</span>
                        <Comment className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard