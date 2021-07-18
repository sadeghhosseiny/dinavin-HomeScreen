import React from 'react';
import styles from './header.module.css';

function header() {
    return (
        <div className={styles.header}>
            <div className={styles.brand}>
                <h1>COPAPP</h1>
                <hr className={styles.brandLine} />
                <div className={styles.wordsContainer}>

                    <h4>dinawin & </h4>
                    <h5 className={styles.words}>
                        <span className={styles.mgaWord}> MGA </span>TECH
                    </h5>
                </div>
            </div>
            <div className={styles.headerMenu}>
                <p className={styles.tel}>09201399130</p>
                <p className={styles.exitFromMap}>خروج از نقشه</p>
                <p className={styles.chooseVhiecle}>انتخاب خودرو</p>
                <p className={styles.contact}>تماس با ما</p>
                <p className={styles.home}>خانه</p>

                <hr className={styles.menuLine} />

            </div>
        </div>
    );
}

export default header;
