import { Route, Routes } from 'react-router-dom';
import { FC } from 'react';

import Books from '../../components/Books';

const Main: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<Books />} />
        </Routes>
    );
};

export default Main;
