import React, {useState} from 'react';
import styles from './PreviewSelector.module.css';
import {AddOutlined} from "@mui/icons-material";
import {getBase64} from "../../api/Utils";

const PreviewSelector = ({register, setValue}) => {
    const [imageSrc, setImageSrc] = useState(null);

    const changePicture = (event) => {
        const objectUrl = URL.createObjectURL(event.target.files[0]);
        setImageSrc(objectUrl);
        getBase64(event.target.files[0], (result) => {
            setValue("preview", result);
        });
    };


    return (
        <div>
            <label htmlFor={"previewUpload"}>
                <input className={styles.HiddenInput} id={"previewUpload"} accept="image/png, image/jpeg"
                       type={"file"} {...register("preview", {onChange: e => changePicture(e)})}/>
                <div className={styles.ImageContainer}>

                    {imageSrc ? <img src={imageSrc} id={"preview"} alt={""}/> :
                        <AddOutlined fontSize={"inherit"} className={styles.PlusIcon}/>}
                </div>
                <p className={styles.DownText}>Добавить превью</p>
            </label>
        </div>
    );
};

export default PreviewSelector;