import React, { FC } from 'react';

interface BookProps {
    imageUrl: string;
    genre: string;
    author: string;
    title: string;
}

const Book: FC<BookProps> = () => {
    return (
        <div>
            <div className="img">
                <img src="" alt="" />
            </div>
            <div className="genre"></div>
            <div className="info">
                <div className="author"></div>
                <div className="title"></div>
            </div>
        </div>
    );
};

export default Book;
