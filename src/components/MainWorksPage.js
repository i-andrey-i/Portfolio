import React from "react";
import ProjectCard from "./ProjectCard";
import Header from "./Header";
import {Link} from 'react-router-dom';

const MainWorksPage = () => (
    <div>
        <Header/>
        <main>
            <center>
                <ul className="menu-search">
                    <li className="search-item"> Все проекты</li>
                    <li className="search-item sp "> Подписки</li>
                    <li className="search-item "> Новые проекты</li>
                </ul>
            </center>

            <section className="my-works-section" id="my-works-page">
                <ul className="all-my-works">
                    <li className="my-work-item"><Link to="/each-work"><ProjectCard/></Link></li>
                    <li className="my-work-item"><Link to="/each-work"><ProjectCard/></Link></li>
                    <li className="my-work-item"><Link to="/each-work"><ProjectCard/></Link></li>
                </ul>
            </section>
        </main>
    </div>
);

export default MainWorksPage