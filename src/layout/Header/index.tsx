import React from 'react';
import { useDispatch } from 'react-redux';

import styles from './Header.module.scss';
import { fetchBooks } from '../../slices/booksSlice';

const Header = () => {
    const dispatch = useDispatch<any>();
    const [findValue, setFindValue] = React.useState('');

    const getBooks = () => {
        dispatch(fetchBooks(findValue));
        setFindValue('');
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
                        onClick={getBooks}
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
