import React from "react";
import ProjectCard from "../components/ProjectCard";
import Header from "../components/Header";
import {Link} from 'react-router-dom';

const MainWorksPage = () => (
    <div>
        <Header/>
        <main>
            <ul className="filters-list">
                <li className="filters-item">
                    <button className="filters-button">Все проекты</button> {/* TODO: добавить кнопкам id и по ним брать нужный фильтр */}
                </li>
                <li className="filters-item">
                    <button className="filters-button">Подписки</button>
                </li>
                <li className="filters-item">
                    <button className="filters-button">Новые проекты</button>
                </li>
            </ul>

            <section className="works-section" id="my-works-page">
                <ul className="works-list">
                    <li className="works-item"><ProjectCard showUserInfo={true} username={"Test Username"}
                                                            title={"Title1"} user_id={1}
                                                            description={"Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 Description1 "}
                                                            created_at={"2024-05-09T11:18:22.382Z"}/></li>
                    <li className="works-item"><ProjectCard showUserInfo={true} username={"Test Username"}
                                                            title={"Title1"} description={"Description1"}
                                                            created_at={"2024-05-09T11:18:22.382Z"}/></li>
                    <li className="works-item"><ProjectCard showUserInfo={true} username={"Test Username"}
                                                            title={"Title1"}
                                                            description={""}
                                                            created_at={"2024-05-09T11:18:22.382Z"}/></li>
                    <li className="works-item"><ProjectCard showUserInfo={true} username={"Test Username"}
                                                            title={"Title1"} description={"Description1"}
                                                            created_at={"2024-05-09T11:18:22.382Z"}/></li>

                    {/*<li className="works-item"><ProjectCard/></li>*/}
                    {/*<li className="works-item"><ProjectCard/></li>*/}
                </ul>
            </section>
        </main>
    </div>
);

export default MainWorksPage