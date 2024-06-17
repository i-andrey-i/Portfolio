import React, {useState} from 'react';
import {AddOutlined, CancelOutlined, PhotoOutlined} from "@mui/icons-material";
import styles from "./PictureSelector.module.css";
import {getBase64} from "../../api/Utils";

const PictureSelector = ({register, key, index, remove, setValue}) => {
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
        getBase64(event.target.files[0], (result) => {
            setValue(`pictures.${index}.picture`, result);
        });
    }

    return (
        <div className={styles.PictureSelector}>
            <div className={styles.HeadPart}>
                <CancelOutlined className={styles.CancelIcon} onClick={() => remove(index)}/>
                {fileName &&
                    (<><PhotoOutlined/>
                        <span>{fileName}</span></>)
                }
            </div>
            <label>
                <input className={styles.HiddenInput} type={"file"}
                       key={key} {...register(`pictures.${index}.photo`, {onChange: e => fileChange(e)})}/>
                <div className={styles.ImageContainer}>
                    {imageSrc ? <img src={imageSrc} alt={""}/> :
                        <AddOutlined fontSize={"inherit"}/>}
                </div>
            </label>
            <div className={styles.DescriptionInput}>
                Описание изображения:
                <textarea key={key} onInput={textAreaChanger} {...register(`pictures.${index}.description`)}
                          placeholder={"Введите краткое описание"}/>
            </div>
        </div>
    );
};

export default PictureSelector;