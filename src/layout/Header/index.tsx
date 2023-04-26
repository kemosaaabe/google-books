import React from 'react';

import styles from './Header.module.scss';
import { fetchBooks, updateFindValue } from '../../feautures/booksSlice';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { categories, filters } from './selectData';

import Select from '../../components/UI/Select';

const Header = () => {
    const dispatch = useAppDispatch();
    const [findValue, setFindValue] = React.useState('');
    const category = useAppSelector((state) => state.books.category);
    const filter = useAppSelector((state) => state.books.filter);

    const getBooks = () => {
        if (!findValue) return;
        dispatch(fetchBooks({ findValue, category, filter }));
        dispatch(updateFindValue({ findValue }));
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
                        <Select items={categories} type="categories" />
                    </div>
                    <div className={styles.sorting}>
                        <Select items={filters} type="filters" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
