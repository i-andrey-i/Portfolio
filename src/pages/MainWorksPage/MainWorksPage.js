import React, {useEffect, useState} from "react";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Header from "../../components/Header/Header";
import {Link} from 'react-router-dom';
import {getNewestProjects, getProjects, getSubscribedProjects, getUserProjects} from "../../api/ProjectApi";
import styles from "./MainWorksPage.module.css"

const MainWorksPage = () => {
    const [projects, setProjects] = useState(null);

    const userId = localStorage.getItem("userId");
    const isAuthorised = userId && userId !== "undefined";


    const handleFilter = (event) => {
        switch (event.target.id) {
            case "newest-projects":
                getNewestProjects()
                    .then(response => setProjects(response));
                break;
            case "subscribed-projects":
                if (isAuthorised) {
                    getSubscribedProjects()
                        .then(response => setProjects(response));
                    break;
                }
            default:
                getProjects()
                    .then(response => setProjects(response));
        }
    }

    useEffect(() => {
        getProjects()
            .then(response => setProjects(response))
            .catch(error => console.error(error))
    }, []);

    if (!projects) {
        return <div>Loading...</div>;
    }


    return (
        <div>
            <Header/>
            <main>
                <ul className={styles.filtersList}>
                    <li className={styles.filtersItem}>
                        <button className={styles.filtersButton} id="all-projects" onClick={handleFilter}>Все проекты
                        </button>
                    </li>
                    <li className={styles.filtersItem}>
                        <button className={styles.filtersButton} id="subscribed-projects"
                                onClick={handleFilter}>Подписки
                        </button>
                    </li>
                    <li className={styles.filtersItem}>
                        <button className={styles.filtersButton} id="newest-projects" onClick={handleFilter}>Новые
                            проекты
                        </button>
                    </li>
                </ul>

                <section className={styles.worksSection} id="my-works-page">
                    <ul className={styles.worksList}>
                        {projects.map((project) => (
                            <li className={styles.worksItem} key={project.data.id}>
                                <ProjectCard showUserInfo={true} project={project}/>
                            </li>
                        ))}
                    </ul>
                </section>
            </main>
        </div>
    );
}

export default MainWorksPage