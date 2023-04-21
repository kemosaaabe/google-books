import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const { REACT_APP_API_KEY } = process.env;

interface StateProps {
    books: any;
    totalItems: number;
    status: string;
    error: Error | null;
}

const initialState: StateProps = {
    books: [],
    totalItems: 0,
    status: 'idle',
    error: null,
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (findValue: string) => {
        try {
            const { data } = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${findValue}+intitle:${findValue}&key=${REACT_APP_API_KEY}`
            );
            return data;
        } catch (error) {
            return error;
        }
    }
);

const booksSlice = createSlice({
    name: 'books',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchBooks.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.books = state.books.concat(action.payload.items);
            state.totalItems = action.payload.totalItems;
        });
    },
});

export default booksSlice.reducer;
