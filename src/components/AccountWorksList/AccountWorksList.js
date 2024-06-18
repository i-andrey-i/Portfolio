import React, {useEffect, useState} from "react"
import ProjectCard from "../ProjectCard/ProjectCard"
import poster from "../../img/name.png";
import {getUserProjects} from "../../api/ProjectApi";
import styles from "./AccountWorksList.module.css";

const AccountWorksList = props => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        getUserProjects(props.userId)
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [props.userId]);

    if (!projects) {
        return <div>Loading...</div>;
    }

    return (
        <section className="works-section" id="my-works-page">
            <center><img id="worksPicture" className="poster" src={poster} alt="Мои работы" width="366" height="237"/>
            </center>
            {Array.isArray(projects) && (
                <ul className={styles.WorksList}>
                    {projects.map((project) => (
                        <li className={styles.WorksItem} key={project.data.id}>
                            <ProjectCard showUserInfo={false} project={project}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
export default AccountWorksList