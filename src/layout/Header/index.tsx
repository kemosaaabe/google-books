import React from 'react';
import axios from 'axios';

import styles from './Header.module.scss';

const Header = () => {
    const { REACT_APP_API_KEY } = process.env;

    const [findValue, setFindValue] = React.useState('');
    const onFind = async () => {
        try {
            const { data } = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${findValue}+intitle:${findValue}&key=${REACT_APP_API_KEY}`
            );
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1>Search for Books</h1>
                <div className={styles.findField}>
                    <input
                        type="text"
                        value={findValue}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setFindValue(e.currentTarget.value);
                        }}
                    />
                    <img
                        src="/assets/img/icons/search.svg"
                        alt="search"
                        onClick={onFind}
                    />
                </div>
                <div className={styles.filters}>
                    <div className={styles.categories}>
                        <label htmlFor="bookCategories">Categories</label>
                        <select id="bookCategories">
                            <option value="all">all</option>
                        </select>
                    </div>
                    <div className={styles.sorting}>
                        <label htmlFor="bookSorting">Sorting by</label>
                        <select id="bookSorting">
                            <option value="relevance">relevance </option>
                        </select>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
