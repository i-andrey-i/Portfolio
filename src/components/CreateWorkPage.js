import React from "react";
import Header from "./Header";
import InfoAboutProject from "./InfoAboutProject";
import PicAboutProject from "./PicAboutProject";

class CreateWorkPage extends React.Component {
  render(){
    return(
        <div>
            <Header/>
            <center> <h3 class="title-page-new">НОВЫЙ ПРОЕКТ</h3> </center>
            <div class="two-section">
              <InfoAboutProject/>
              <PicAboutProject/>
            </div>
        </div>
    )
  }
}

export default CreateWorkPage