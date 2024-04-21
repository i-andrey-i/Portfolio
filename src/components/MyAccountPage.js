import React from "react";
import Header from "./Header"
import MyAccountInformation from "./MyAccountInformation";
import MyAccountMenu from "./MyAccauntMenu";
import MyAccountWorksList from "./MyAccountWorksList";

class MyAccountPage extends React.Component {
  render(){
    return(
        <div>
            <Header/>
            <main>
              <article class="two-sections">
                <MyAccountMenu/>
                <MyAccountInformation/>
              </article>
              <MyAccountWorksList/>
            </main>
        </div>
    )
  }
}

export default MyAccountPage