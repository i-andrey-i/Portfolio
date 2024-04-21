import React from "react"
import EachWork from "./EachWork"
import poster from "./img/name.png";

class MyAccountWorksList extends React.Component{
    render(){
        return(
            <section class="my-works-section" id="my-works-page">
                <center><img class="poster" src={poster} alt="Мои работы" width="366" height="237"/></center>

                <ul class="all-my-works">
                    <li class="my-work-item"><EachWork/></li>
                    <li class="my-work-item"><EachWork/></li>
                    <li class="my-work-item"><EachWork/></li>

                </ul>
            </section>
        )
    }
}

export default MyAccountWorksList