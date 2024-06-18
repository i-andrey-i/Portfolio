import React, {useState} from "react";
import Header from "../../components/Header/Header";
import styles from "./CreateWorkPage.module.css";
import PreviewSelector from "../../components/PreviewSelector/PreviewSelector";
import InputBlock from "../../components/InputBlock/InputBlock";
import PictureSelector from "../../components/PictureSelector/PictureSelector";
import {useFieldArray, useForm} from "react-hook-form";
import {createProject} from "../../api/ProjectApi";
import {useNavigate} from "react-router-dom";

const CreateWorkPage = () => {
    const navigate = useNavigate();
    const {register, handleSubmit, control, setValue} = useForm();
    const {fields, append, remove} = useFieldArray({control, name: "pictures"});
    const textAreaChanger = (event) => {
        let target = event.target;
        target.style.height = 'auto';
        target.style.height = (target.scrollHeight) + "px";
    };

    const addPictureInput = (event) => {
        append(null);
    }

    const removePictureInput = (index) => {
        remove(index);
    }

    const onSubmit = (data) => {
        console.log(data);
        createProject(data)
            .then(response => {
                navigate(`/project/${response.data.id}`);
            })
            .catch(error => console.error(error));
    }

    return (<div>
            <Header/>
            <main>
                <h2 className={styles.Title}>Новый проект</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.TwoSections}>
                        <div className={styles.PicturesBlock}>
                            <PreviewSelector register={register} setValue={setValue}/>
                            <div className={styles.AdditionalPictures}>
                                <div className={styles.TextBlock}>
                                    Изображения
                                </div>
                                <div className={styles.Pictures}>
                                    {fields.map((field, index) => (
                                        <PictureSelector register={register} key={field.id} index={index}
                                                         remove={removePictureInput} setValue={setValue}/>
                                    ))}
                                    <button type="button" onClick={addPictureInput}>Добавить</button>
                                </div>
                            </div>
                        </div>
                        <div className={styles.InfoBlock}>
                            <InputBlock title={"Название проекта"}>
                                <input {...register("title")} placeholder={"Введите название"} required={true}/>
                            </InputBlock>
                            <InputBlock title={"Описание проекта"}>
                            <textarea {...register("description")} onInput={textAreaChanger}
                                      placeholder={"Введите описание"} required={true}/>
                            </InputBlock>
                            <InputBlock title={"Дополнительные файлы"}>

                            </InputBlock>
                        </div>
                    </div>
                    <button>Подтвердить</button>
                </form>
            </main>
        </div>
    )
        ;
}

export default CreateWorkPage