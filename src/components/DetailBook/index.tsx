import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';

import styles from './DetailBook.module.scss';

import Container from '../Container';
import { IconBook, ArrowBack } from './icon';

const DetailBook = () => {
    const { bookId } = useParams();
    const book = useAppSelector(
        (state) =>
            state.books.books.find((book) => book.id === bookId)?.volumeInfo
    );

    return (
        <Container>
            <Link to="/google-books/" className={styles.arrow}>
                <ArrowBack />
            </Link>
            {book ? (
                <div className={styles.book}>
                    <div className={styles.bookImg}>
                        {book.imageLinks ? (
                            <img
                                src={book.imageLinks.thumbnail}
                                alt="book cover"
                            />
                        ) : (
                            <div className={styles.blankImage}>
                                <IconBook />
                            </div>
                        )}
                    </div>
                    <div className={styles.bookInfo}>
                        <div className={styles.category}>
                            {book.categories
                                ? book.categories.join(', ')
                                : 'No categories'}
                        </div>
                        <h2 className={styles.title}>{book.title}</h2>
                        <p className={styles.authors}>
                            {book.authors
                                ? book.authors.join(', ')
                                : 'No author'}
                        </p>
                        <p className={styles.description}>
                            {book.description
                                ? book.description
                                : 'No description'}
                        </p>
                    </div>
                </div>
            ) : (
                <div className={styles.error}>
                    <h2>
                        Ошибочка какая-то, бро, либо ты страничку перезагрузил,
                        а тут книжечки не сохранятся в базу данных :(
                    </h2>
                    <div className={styles.img}>
                        <img src="assets/img/nobooks.jpg" alt="book" />
                    </div>
                </div>
            )}
        </Container>
    );
};

export default DetailBook;
