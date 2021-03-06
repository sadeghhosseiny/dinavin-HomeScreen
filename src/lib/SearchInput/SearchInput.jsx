import React from 'react';
import styles from './SearchInput.module.css';

function SearchInput() {
    return (
        <div className={styles.container}>
            <button className={styles.searchIcon}>
                <i className="fa fa-search"></i>
            </button>
            <input className={styles.input} type="text" />
            <button className={styles.searchBtn}>جستجو</button>
        </div>
    );
}

export default SearchInput;
