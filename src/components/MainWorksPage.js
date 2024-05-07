import React from "react";
import EachWork from "./EachWork";
import Header from "./Header";
import { Link } from 'react-router-dom';

class MainWorksPage extends React.Component {
  render(){
    return(
      <div>
        <Header/>
        <main>
          <center>
            <ul class="menu-search">
                <li class="search-item"> Все проекты </li>
                <li class="search-item sp "> Подписки </li>
                <li class="search-item "> Новые проекты </li>
            </ul>
          </center>

            <section class="my-works-section" id="my-works-page">
                <ul class="all-my-works">
                  <li class="my-work-item"><Link to="/each-work"><EachWork/></Link></li>
                  <li class="my-work-item"><Link to="/each-work"><EachWork/></Link></li>
                  <li class="my-work-item"><Link to="/each-work"><EachWork/></Link></li>
                </ul>
            </section>
        </main>
      </div>
    )
  }
}

export default MainWorksPage