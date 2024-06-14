import React, {useState} from 'react';
import styles from '../css/PreviewSelector.module.css';
import {AddOutlined} from "@mui/icons-material";

const PreviewSelector = () => {
    const [imageSrc, setImageSrc] = useState(null);

    const changePicture = (event) => {
        const objectUrl = URL.createObjectURL(event.target.files[0]);
        setImageSrc(objectUrl);
    };



    return (
        <div>
            <label htmlFor={"previewUpload"}>
                <input id={"previewUpload"} type={"file"} onChange={changePicture}/>
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