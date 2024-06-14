import React from "react";
import Header from "../components/Header";
import styles from "../css/CreateWorkPage.module.css";
import PreviewSelector from "../components/PreviewSelector";

const CreateWorkPage = () => (
    <div>
        <Header/>
        <main>
            <h2 className={styles.Title}>Новый проект</h2>
            <form>
                <div className={styles.PicturesBlock}>
                    <PreviewSelector/>
                </div>
                <div className={styles.InfoBlock}>

                </div>
            </form>
        </main>
    </div>
);

export default CreateWorkPage