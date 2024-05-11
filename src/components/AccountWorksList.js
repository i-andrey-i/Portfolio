import React, {useEffect, useState} from "react"
import ProjectCard from "./ProjectCard"
import poster from "../img/name.png";
import {getUserProjects} from "../api/ProjectApi";

const AccountWorksList = props => {
    const [projects, setProjects] = useState(null);

    useEffect(() => {
        getUserProjects(props.id)
            .then((data) => {
                setProjects(data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, [props.id]);

    if (!projects) {
        return <div>Loading...</div>;
    }

    return (
        <section className="works-section" id="my-works-page">
            <center><img className="poster" src={poster} alt="Мои работы" width="366" height="237"/></center>
            {Array.isArray(projects) && (
                <ul className="works-list">
                    {projects.map((project) => (
                        <li className="works-item" key={project.data.id}>
                            <ProjectCard showUserInfo={false} project={project}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
export default AccountWorksList