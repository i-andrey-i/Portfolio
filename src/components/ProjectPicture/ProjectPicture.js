import React, {useEffect, useState} from 'react';
import styles from './ProjectPicture.module.css';
import {getProjectPicture} from "../../api/ProjectApi";

const ProjectPicture = ({image_path, description}) => {
    const [pictureSrc, setPictureSrc] = useState(null);

    useEffect(() => {
        getProjectPicture(image_path)
            .then(blob => {
                const objectUrl = URL.createObjectURL(blob);
                setPictureSrc(objectUrl);
            })
            .catch(error => console.log(error));

        return () => {
            if (pictureSrc) {
                URL.revokeObjectURL(pictureSrc);
            }
        }
    }, [image_path])

    return (
        <div className={styles.ProjectPicture}>
            <div className={styles.ImageContainer}>
                {pictureSrc && <img src={pictureSrc} alt={""}/>}
            </div>
            <p className={styles.PictureDescription}>{description}</p>
        </div>
    );
};

export default ProjectPicture;