import React, {useState} from "react";
import Header from "../../components/Header/Header";
import styles from "./CreateWorkPage.module.css";
import PreviewSelector from "../../components/PreviewSelector/PreviewSelector";
import InputBlock from "../../components/InputBlock/InputBlock";
import PictureSelector from "../../components/PictureSelector/PictureSelector";

const CreateWorkPage = () => {
    const [pictures, setPictures] = useState([]);
    const textAreaChanger = (event) => {
        let target = event.target;
        target.style.height = 'auto';
        target.style.height = (target.scrollHeight) + "px";
    };

    const addPictureInput = (event) => {
        setPictures(pictures.concat(1));
    }

    return (<div>
            <Header/>
            <main>
                <h2 className={styles.Title}>Новый проект</h2>
                <form>
                    <div className={styles.PicturesBlock}>
                        <PreviewSelector/>
                        <div className={styles.AdditionalPictures}>
                            <div className={styles.TextBlock}>
                                Изображения
                            </div>
                            <div className={styles.Pictures}>
                                {pictures.map((picture) => (
                                    <PictureSelector/>
                                ))}
                                <button type="button" onClick={addPictureInput}>Добавить</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.InfoBlock}>
                        <InputBlock title={"Название проекта"}>
                            <input placeholder={"Введите название"}/>
                        </InputBlock>
                        <InputBlock title={"Описание проекта"}>
                            <textarea onInput={textAreaChanger} placeholder={"Введите описание"}/>
                        </InputBlock>
                        <InputBlock title={"Дополнительные файлы"}>

                        </InputBlock>
                    </div>
                </form>
            </main>
        </div>
    )
        ;
}

export default CreateWorkPage