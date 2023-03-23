import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headerInner}>
                <h1>Search For Books</h1>
                <div className={styles.findField}>
                    <input type="text" />
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
