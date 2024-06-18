import React, {useEffect, useState} from "react";
import Header from "../../components/Header/Header";
import styles from "./ProjectPage.module.css";
import {ChatBubbleOutlineOutlined, Favorite} from "@mui/icons-material";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import {isAuthorised, toggleLike, toggleSubscription} from "../../api/Utils";
import {useNavigate, useParams} from "react-router-dom";
import {getProject} from "../../api/ProjectApi";
import {getProfile, getProfilePicture} from "../../api/ProfileApi";
import ProjectPicture from "../../components/ProjectPicture/ProjectPicture";

const ProjectPage = () => {
    const navigate = useNavigate();
    const [profileImageSrc, setProfileImageSrc] = useState(null);
    const [projectData, setProjectData] = useState(null);
    const [profileInfo, setProfileInfo] = useState(null);

    const params = useParams();
    const id = params.id;

    useEffect(() => {
        getProject(id)
            .then((data) => {
                setProjectData(data);
            })
            .catch(error => console.error(error))
    }, [id]);

    useEffect(() => {
        if (!projectData) {
            return;
        }
        getProfile(projectData.data.user_id)
            .then((data) => {
                setProfileInfo(data);
            })
            .catch(error => console.error(error));
    }, [projectData]);

    useEffect(() => {
        if (!projectData) {
            return;
        }
        getProfilePicture(projectData.data.user_id)
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
    }, [id, projectData]);

    if (!projectData || !profileInfo)
        return <div>Loading...</div>;

    const date = new Date(projectData.data.created_at);
    const formattedDate = date.toLocaleDateString('ru-RU', {day: '2-digit', month: '2-digit', year: 'numeric'});

    return (
        <div>
            <Header/>
            <main>
                <div className={styles.Project}>
                    <div className={styles.ProjectHeader}>
                        <div className={styles.UserInfo}
                             onClick={() => navigate(`/profile/${projectData.data.user_id}`)}>
                            <div className={styles.ImageContainer}>
                                {profileImageSrc && <img src={profileImageSrc}/>}
                            </div>
                            <p>{profileInfo.data.name}</p>
                        </div>
                        <div className={styles.ProjectMeta}>
                            <div className={styles.IconBox}>
                                <span>{projectData.data.likes_count}</span>
                                {projectData.is_liked ?
                                    <Favorite
                                        onClick={() => toggleLike(projectData.is_liked, projectData.data.id, setProjectData)}
                                        className={`${styles.Icon} ${styles.Like}`}
                                        style={{fill: "red"}}/> :
                                    <FavoriteBorderOutlinedIcon
                                        onClick={() => toggleLike(projectData.is_liked, projectData.data.id, setProjectData)}
                                        className={`${styles.Icon} ${styles.Like}`}/>}
                            </div>
                            <div className={styles.IconBox}>
                                <span>{projectData.data.comments_count}</span>
                                <ChatBubbleOutlineOutlined className={styles.Icon}/>
                            </div>
                            {!profileInfo.can_edit && isAuthorised() && (
                                <button
                                    onClick={() => toggleSubscription(profileInfo.is_subscribed, profileInfo.data.user_id, setProfileInfo)}
                                    className={profileInfo.is_subscribed ? styles.UnsubscribeButton : styles.SubscribeButton}>
                                    {profileInfo.is_subscribed ? "Отписаться" : "Подписаться"}
                                </button>)
                            }
                        </div>
                    </div>
                    <div className={styles.ProjectInfo}>
                        <h2>{projectData.data.title}</h2>
                        <p>{projectData.data.description}</p>
                        <div className={styles.CreatedAt}>
                            <span>Дата создания:</span>{formattedDate}
                        </div>
                    </div>
                    <div className={styles.ProjectMedia}>
                        <div className={styles.ProjectPictures}>
                            <ProjectPicture image_path={projectData.data.preview} description={"Превью"}/>
                            {projectData.data.pictures.map((picture) => (
                                <ProjectPicture key={picture.picture} image_path={picture.picture}
                                                description={picture.description}/>
                            ))}
                        </div>
                        <div className={styles.ProjectFiles}>

                        </div>
                    </div>
                    <div className={styles.Comments}>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default ProjectPage