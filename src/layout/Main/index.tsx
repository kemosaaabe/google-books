import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';

import Books from '../../components/Books';
import DetailBook from '../../components/DetailBook';

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Books />} />
            <Route path="/book/:bookId" element={<DetailBook />} />
        </Routes>
    );
};

export default Main;
