import React from "react";
import EachWork from "./EachWork";
import Header from "./Header";

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
                    <li class="my-work-item"><EachWork/></li>

                    <li class="my-work-item"><EachWork/></li>

                    <li class="my-work-item"><EachWork/></li>
                </ul>
            </section>
        </main>
      </div>
    )
  }
}

export default MainWorksPage