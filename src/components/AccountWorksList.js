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
                    {/*<li className="my-work-item"><Link to="/each-work"><ProjectCard/></Link></li>*/}
                    {projects.map((project) => (
                        <li className="works-item" key={project.data.id}>
                            <ProjectCard username={project.data.username} title={project.data.title}
                                         description={project.data.description} created_at={project.data.created_at}
                                         showUserInfo={false} likes_count={project.data.likes_count}
                                         comments_count={project.data.comments_count}/>
                        </li>
                    ))}
                </ul>
            )}
        </section>
    );
}
export default AccountWorksList