import { configureStore } from '@reduxjs/toolkit';
import booksReducer from '../slices/booksSlice';

export default configureStore({
    reducer: {
        books: booksReducer,
    },
});
