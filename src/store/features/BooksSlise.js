import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const getBooks = createAsyncThunk(
    'books/getBooks',
    async function(){
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data;
    }
)

const Books_Slice = createSlice({
    name: 'books',
    initialState: {
        books: [],
    },
    extraReducers: {
        [getBooks.fulfilled]: (state, action) => {
            state.books = action.payload
            console.log(action.payload)
        }
    },
})

export default Books_Slice.reducer;