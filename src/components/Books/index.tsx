import { useAppSelector, useAppDispatch } from '../../app/hooks';
import styles from './Books.module.scss';
import { fetchMoreBooks } from '../../feautures/booksSlice';

import Container from '../Container';
import Book from './Book';
import { GoogleBook } from '../../types/book';
import ContentLoader from 'react-content-loader';

const Books = () => {
    const dispatch = useAppDispatch();
    const books = useAppSelector((state) => state.books.books);
    const status = useAppSelector((state) => state.books.status);
    const totalItems = useAppSelector((state) => state.books.totalItems);
    const findValue = useAppSelector((state) => state.books.findValue);
    const category = useAppSelector((state) => state.books.category);
    const filter = useAppSelector((state) => state.books.filter);

    if (status === 'pending')
        return (
            <Container>
                <div className={styles.booksWrapper}>
                    {books?.length ? (
                        <h2 className={styles.total}>
                            Найдено книг: {totalItems}
                        </h2>
                    ) : null}
                    <div className={styles.books}>
                        {books?.length ? (
                            <>
                                {books.map(
                                    (book: GoogleBook, index: number) => (
                                        <Book
                                            key={index}
                                            volumeInfo={book.volumeInfo}
                                            id={book.id}
                                        />
                                    )
                                )}
                            </>
                        ) : null}
                        {[...new Array(8)].map((item, index) => (
                            <ContentLoader
                                rtl
                                speed={1}
                                width={220}
                                height={389}
                                viewBox="0 0 220 389"
                                backgroundColor="#f3f3f3"
                                foregroundColor="#ecebeb"
                                key={index}
                            >
                                <rect
                                    x="0"
                                    y="0"
                                    rx="10"
                                    ry="10"
                                    width="220"
                                    height="389"
                                />
                            </ContentLoader>
                        ))}
                    </div>
                </div>
            </Container>
        );

    if (status === 'succeeded')
        return (
            <Container>
                <div className={styles.booksWrapper}>
                    {books?.length ? (
                        <>
                            <h2 className={styles.total}>
                                Найдено книг: {totalItems}
                            </h2>
                            <div className={styles.books}>
                                {books.map(
                                    (book: GoogleBook, index: number) => (
                                        <Book
                                            key={index}
                                            volumeInfo={book.volumeInfo}
                                            id={book.id}
                                        />
                                    )
                                )}
                            </div>
                            <button
                                className={
                                    totalItems > books.length
                                        ? styles.loadMoreBtn
                                        : styles.buttonHidden
                                }
                                onClick={() =>
                                    dispatch(
                                        fetchMoreBooks({
                                            findValue,
                                            startIndex: books.length,
                                            category,
                                            filter,
                                        })
                                    )
                                }
                            >
                                Загрузить еще
                            </button>
                        </>
                    ) : (
                        <>
                            <p className={styles.text}>
                                Ой... кажется книжек с названием: "{findValue}"
                                нет :(
                            </p>
                            <div className={styles.img}>
                                <img src="/assets/img/nobooks.jpg" alt="book" />
                            </div>
                        </>
                    )}
                </div>
            </Container>
        );

    return (
        <div className={styles.booksWrapper}>
            <p className={styles.text}>Напишите свой первый запросик</p>
            <div className={styles.img}>
                <img src="/assets/img/write.jpg" alt="book" />
            </div>
        </div>
    );
};

export default Books;
