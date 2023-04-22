import { useAppSelector } from '../../app/hooks';
import styles from './Books.module.scss';

import Container from '../Container';
import Book from './Book';
import { GoogleBook } from '../../types/book';
import ContentLoader from 'react-content-loader';

const Books = () => {
    const books = useAppSelector((state) => state.books.books);
    const status = useAppSelector((state) => state.books.status);
    console.log(status);

    if (status === 'pending')
        return (
            <Container>
                <div className={styles.booksWrapper}>
                    <div className={styles.books}>
                        <ContentLoader
                            rtl
                            speed={1}
                            width={980}
                            height={802}
                            viewBox="0 0 980 802"
                            backgroundColor="#f3f3f3"
                            foregroundColor="#ecebeb"
                        >
                            <rect
                                x="0"
                                y="0"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="245"
                                y="0"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="490"
                                y="0"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="735"
                                y="0"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="0"
                                y="413"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="245"
                                y="413"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="490"
                                y="413"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                            <rect
                                x="735"
                                y="413"
                                rx="10"
                                ry="10"
                                width="220"
                                height="389"
                            />
                        </ContentLoader>
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
                            {books.map((book: GoogleBook) => (
                                <Book
                                    key={book.id}
                                    volumeInfo={book.volumeInfo}
                                />
                            ))}
                        </div>
                    ) : (
                        <p className={styles.text}>
                            Ой... кажется книжек с таким названием нет :(
                        </p>
                    )}
                </div>
            </Container>
        );

    return (
        <div className={styles.booksWrapper}>
            <p className={styles.text}>Напишите свой первый запросик</p>
        </div>
    );
};

export default Books;
