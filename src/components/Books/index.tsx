import { motion, AnimatePresence } from 'framer-motion';

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
                <AnimatePresence>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <div className={styles.books}>
                            {books.map((book: GoogleBook) => (
                                <Book volumeInfo={book.volumeInfo} />
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </Container>
    );
};

export default Books;
