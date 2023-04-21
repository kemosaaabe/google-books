import React, { FC } from 'react';
import { Volume } from '../../../types/book';
import { IconBook } from './icon';

import styles from './Book.module.scss';

interface BookProps {
    volumeInfo: Volume;
}

const Book: FC<BookProps> = ({ volumeInfo }) => {
    return (
        <div className={styles.book}>
            <div className={styles.img}>
                {volumeInfo.imageLinks ? (
                    <img
                        src={volumeInfo.imageLinks.thumbnail}
                        alt="book cover"
                    />
                ) : (
                    <div className={styles.blankImage}>
                        <IconBook />
                    </div>
                )}
            </div>
            <div className={styles.genre}>
                {volumeInfo.categories
                    ? volumeInfo.categories.join(', ')
                    : 'No categories'}
            </div>
            <div className={styles.info}>
                <div className={styles.author}>
                    {volumeInfo.authors
                        ? volumeInfo.authors.join(', ')
                        : 'No author'}
                </div>
                <div className={styles.title}>{volumeInfo.title}</div>
            </div>
        </div>
    );
};

export default Book;
