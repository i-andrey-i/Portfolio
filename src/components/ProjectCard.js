import React from "react";
import workIMG from "../img/img-test.png";
import user from "../img/image 1 (1).png";
import {ReactComponent as ThumbUp} from "../img/ThumbUp.svg";
import {ReactComponent as Comment} from "../img/Comment.svg";
import {Link} from "react-router-dom";
import styles from "../css/ProjectCard.module.css"

const ProjectCard = props => {
    const {project, showUserInfo} = props;
    const date = new Date(project.data.created_at);
    const formattedDate = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'});
    return (
        <div className={styles.projectCard}>
            {showUserInfo && (
                <Link to={`/profile/${project.data.user_id}`}>
                    <div className={styles.userInfo}>

                        <img src={user} alt="" width="38" height="38"/>
                        <p className={styles.username}>{project.data.username}</p>

                    </div>
                </Link>
            )}
            <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>{project.data.title}</p>
                <img className={styles.projectPreview} src={workIMG} alt="Изображение работы"/>
                <p className={styles.projectDescription}>{project.data.description}</p>
                <div className={styles.projectMeta}>
                    <time className={styles.projectCreatedAt} dateTime={project.data.created_at}>{formattedDate}</time>
                    <div className={`${styles.iconWithText} ${styles.projectLikes}`}>
                        <span>{project.data.likes_count}</span>
                        <ThumbUp className="icon"/>
                    </div>
                    <div className={`${styles.iconWithText} ${styles.projectComments}`}>
                        <span>{project.data.comments_count}</span>
                        <Comment className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard