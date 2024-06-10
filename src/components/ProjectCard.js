import React, {useState} from "react";
import workIMG from "../img/img-test.png";
import user from "../img/image 1 (1).png";
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import {Link} from "react-router-dom";
import styles from "../css/ProjectCard.module.css"
import {ChatBubbleOutlineOutlined, Favorite} from "@mui/icons-material";
import {likeProject, unlikeProject} from "../api/ProjectApi";

const ProjectCard = props => {
    const {project, showUserInfo} = props;
    const [projectData, setProjectData] = useState(project);
    const date = new Date(project.data.created_at);
    const formattedDate = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'});

    const toggleLike = () => {
        if (projectData.is_liked) {
            unlikeProject(project.data.id)
                .then(data => setProjectData(data))
                .catch(error => console.log(error));
        }
        else {
            likeProject(project.data.id)
                .then(data => setProjectData(data))
                .catch(error => console.log(error));
        }
        console.log(projectData);
    }

    return (
        <div className={styles.projectCard}>
            {showUserInfo && (
                <Link to={`/profile/${projectData.data.user_id}`}>
                    <div className={styles.userInfo}>

                        <img src={user} alt="" width="38" height="38"/>
                        <p className={styles.username}>{projectData.data.username}</p>

                    </div>
                </Link>
            )}
            <div className={styles.projectInfo}>
                <p className={styles.projectTitle}>{projectData.data.title}</p>
                <img className={styles.projectPreview} src={workIMG} alt="Изображение работы"/>
                <p className={styles.projectDescription}>{projectData.data.description}</p>
                <div className={styles.projectMeta}>
                    <time className={styles.projectCreatedAt} dateTime={projectData.data.created_at}>{formattedDate}</time>
                    <div className={`${styles.iconWithText} ${styles.projectLikes}`}>
                        <span>{projectData.data.likes_count}</span>
                        {projectData.is_liked ?
                            <Favorite onClick={() => toggleLike()} className={`${styles.Icon} ${styles.Like}`} style={{fill: "red"}}/> :
                            <FavoriteBorderOutlinedIcon onClick={() => toggleLike()} className={`${styles.Icon} ${styles.Like}`}/>}
                    </div>
                    <div className={`${styles.iconWithText} ${styles.projectComments}`}>
                        <span>{projectData.data.comments_count}</span>
                        <ChatBubbleOutlineOutlined className="icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard