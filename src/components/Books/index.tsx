import { useAppSelector } from '../../app/hooks';
import styles from './Books.module.scss';

import Container from '../Container';
import Book from './Book';
import { GoogleBook } from '../../types/book';

const Books = () => {
    const books = useAppSelector((state) => state.books.books);
    console.log(books);
    return (
        <Container>
            <div className={styles.booksWrapper}>
                <div className={styles.books}>
                    {books.map((book: GoogleBook) => (
                        <Book volumeInfo={book.volumeInfo} />
                    ))}
                </div>
            </div>
        </Container>
    );
};

export default Books;
