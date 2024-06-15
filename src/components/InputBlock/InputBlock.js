import React from 'react';
import styles from './InputBlock.module.css';

const InputBlock = ({children, title}) => {

    return (
        <div className={styles.InputBlock}>
            <div className={styles.TitleBlock}>
                {title}
            </div>
            <div className={styles.Input}>
                {children}
            </div>
        </div>
    );
};

export default InputBlock;