import { useAppSelector } from '../../app/hooks';
import styles from './Books.module.scss';

import Container from '../Container';
import Book from './Book';
import { GoogleBook } from '../../types/book';
import ContentLoader from 'react-content-loader';

const Books = () => {
    const books = useAppSelector((state) => state.books.books);
    const status = useAppSelector((state) => state.books.status);

    if (status === 'pending')
        return (
            <Container>
                <div className={styles.booksWrapper}>
                    <div className={styles.books}>
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
                    {books ? (
                        <div className={styles.books}>
                            {books.map((book: GoogleBook, index: number) => (
                                <Book
                                    key={index}
                                    volumeInfo={book.volumeInfo}
                                />
                            ))}
                        </div>
                    ) : (
                        <>
                            <p className={styles.text}>
                                Ой... кажется книжек с таким названием нет :(
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
