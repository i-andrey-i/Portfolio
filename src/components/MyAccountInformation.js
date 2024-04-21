import React from "react";
import icon2 from "./img/user-icon-2.png";
import phone from "./img/phone.png";
import mail from "./img/mail.png";
import vk from "./img/vk.png";

class MyAccountInformation extends React.Component {
  render(){
    return(
        <section class="main-information-section" id="main-section-page">
                <div class="user">
                    <img src={icon2} alt="" width="77" height="80"/>
                    <p class="user-name">ФИО</p>
                </div>
                
                <ul class="information-items">
                    <li class="information-item-title">
                        <p class="information-text">Город:</p>
                        <input class="input-information" type="text" placeholder="" name="one-line" size="20"></input>
                    </li>
                    <li class="information-item-title">
                        <p class="information-text">Учебное заведение:</p>
                        <input class="input-information" type="text" placeholder="" name="one-line" size="20"></input>
                    </li>
                    <li class="information-item-description">
                        <p class="information-text">Описание:</p>
                        <textarea class="input-information-ds" rows="5"></textarea>
                    </li>
                        
                    <li class="information-item-contacts">
                        <p class="information-text">Контакты:</p>
                        <div class="contact">
                            <img class="contact-img" src={phone} alt="" width="24" height="24"/>
                            <input class="input-information-contact" type="text" placeholder="" name="one-line" size="20"></input>
                        </div>

                        <div class="contact">
                            <img class="contact-img" src={mail} alt="" width="24" height="24"/>
                            <input class="input-information-contact" type="text" placeholder="" name="one-line" size="20"></input>
                        </div>

                        <div class="contact">
                            <img class="contact-img" src={vk} alt="" width="24" height="24"/>
                            <input class="input-information-contact" type="text" placeholder="" name="one-line" size="20"></input>
                        </div>     
                    </li>
                 </ul>
                 <button><p class="information-item-change">Изменить</p></button>
            </section>
    )
  }
}

export default MyAccountInformation