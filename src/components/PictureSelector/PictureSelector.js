import React, {useState} from 'react';
import {AddOutlined, CancelOutlined, PhotoOutlined} from "@mui/icons-material";
import styles from "./PictureSelector.module.css";

const PictureSelector = () => {
    const [imageSrc, setImageSrc] = useState(null);
    const [fileName, setFileName] = useState(null);
    const textAreaChanger = (event) => {
        let target = event.target;
        target.style.height = 'auto';
        target.style.height = (target.scrollHeight) + "px";
    };

    const fileChange = (event) => {
        const objectUrl = URL.createObjectURL(event.target.files[0]);
        setFileName(event.target.files[0].name);
        setImageSrc(objectUrl);
    }

    return (
        <div className={styles.PictureSelector}>
            <div className={styles.HeadPart}>
                <CancelOutlined className={styles.CancelIcon}/>
                {fileName &&
                    (<><PhotoOutlined/>
                        <span>{fileName}</span></>)
                }
            </div>
            <label>
                <input type={"file"} onChange={fileChange}/>
                <div className={styles.ImageContainer}>
                    {imageSrc ? <img src={imageSrc} alt={""}/> :
                        <AddOutlined fontSize={"inherit"}/>}
                </div>
            </label>
            <div className={styles.DescriptionInput}>
                Описание изображения:
                <textarea onInput={textAreaChanger} placeholder={"Введите краткое описание"}/>
            </div>
        </div>
    );
};

export default PictureSelector;