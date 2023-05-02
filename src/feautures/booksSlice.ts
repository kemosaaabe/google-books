import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { GoogleBook } from '../types/book';

const { REACT_APP_API_KEY } = process.env;

interface StateProps {
    books: GoogleBook[];
    findValue: string;
    category: string;
    filter: string;
    totalItems: number;
    status: string;
    error: Error | null;
}

interface BooksAction {
    items: GoogleBook[];
    kind: string;
    totalItems: number;
}

interface FetchData {
    findValue: string;
    startIndex?: number;
    category: string;
    filter: string;
}

const initialState: StateProps = {
    books: [],
    findValue: '',
    category: 'all',
    filter: 'relevance',
    totalItems: 0,
    status: 'idle',
    error: null,
};

export const fetchBooks = createAsyncThunk(
    'books/fetchBooks',
    async (fetchData: FetchData) => {
        const { findValue, category, filter } = fetchData;
        const categoryInUrl = category === 'all' ? '' : category;
        try {
            const { data } = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${findValue}+intitle:${findValue}+subject:
                ${categoryInUrl}&orderBy=${filter}&maxResults=12&key=${REACT_APP_API_KEY}`
            );
            return data;
        } catch (error) {
            return error;
        }
    }
);

export const fetchMoreBooks = createAsyncThunk(
    'books/fetchMoreBooks',
    async (fetchData: FetchData) => {
        const { findValue, startIndex, category, filter } = fetchData;
        const categoryInUrl = category === 'all' ? '' : category;

        try {
            const { data } = await axios.get(
                `https://www.googleapis.com/books/v1/volumes?q=${findValue}+intitle:${findValue}+subject:
                ${categoryInUrl}&orderBy=${filter}&startIndex=${startIndex}&maxResults=12&key=${REACT_APP_API_KEY}`
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
    reducers: {
        updateFindValue: (
            state,
            action: PayloadAction<{ findValue: string }>
        ) => {
            state.findValue = action.payload.findValue;
        },
        updateFilter: (state, action: PayloadAction<{ filter: string }>) => {
            state.filter = action.payload.filter;
        },
        updateCategory: (
            state,
            action: PayloadAction<{ category: string }>
        ) => {
            state.category = action.payload.category;
        },
    },
    extraReducers(builder) {
        builder
            .addCase(
                fetchBooks.fulfilled,
                (state, action: PayloadAction<BooksAction>) => {
                    state.status = 'succeeded';
                    state.books = action.payload.items;
                    state.totalItems = action.payload.totalItems;
                }
            )
            .addCase(
                fetchMoreBooks.fulfilled,
                (state, action: PayloadAction<BooksAction>) => {
                    state.status = 'succeeded';
                    state.books = state.books.concat(action.payload.items);
                    state.totalItems = action.payload.totalItems;
                }
            )
            .addCase(fetchBooks.pending, (state) => {
                state.books = [];
                state.status = 'pending';
            })
            .addCase(fetchMoreBooks.pending, (state) => {
                state.status = 'pending';
            });
    },
});

export const { updateFindValue, updateFilter, updateCategory } =
    booksSlice.actions;
export default booksSlice.reducer;
