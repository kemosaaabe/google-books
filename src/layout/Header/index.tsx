import React from 'react';

import styles from './Header.module.scss';
import { fetchBooks } from '../../feautures/booksSlice';
import { useAppDispatch } from '../../app/hooks';

const Header = () => {
    const dispatch = useAppDispatch();
    const [findValue, setFindValue] = React.useState('');

    const getBooks = () => {
        if (!findValue) return;
        dispatch(fetchBooks(findValue));
        setFindValue('');
    };

    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1>Поиск книг</h1>
                <div className={styles.findField}>
                    <input
                        type="text"
                        value={findValue}
                        onChange={(e: React.FormEvent<HTMLInputElement>) => {
                            setFindValue(e.currentTarget.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') getBooks();
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
                        <label htmlFor="bookCategories">Категории</label>
                        <select id="bookCategories">
                            <option value="all">all</option>
                        </select>
                    </div>
                    <div className={styles.sorting}>
                        <label htmlFor="bookSorting">Сортировка</label>
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
