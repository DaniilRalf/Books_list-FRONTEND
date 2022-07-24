import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


let URL_BOOKS = 'http://localhost:4000/api/books/';


// GET ALL---------------------------------------------
export const getBooks = createAsyncThunk(
    'books/getBooks',
    async function(){
        const response = await axios.get(`${URL_BOOKS}get_all`);
        return response.data;
    }
)
// GET ALL---------------------------------------------


// GET ONE---------------------------------------------
export const getById = createAsyncThunk(
    'books/getById',
    async function(id){
        let body = {
            id: id
        };
        const response = await axios.post(`${URL_BOOKS}get_by_id`, body);
        return response.data;
    }
)
// GET ONE---------------------------------------------



const Books_Slice = createSlice({
    name: 'books',
    initialState: {
        books: [],
        book: [],
    },
    extraReducers: {
        [getBooks.fulfilled]: (state, action) => {
            state.books = action.payload
            console.log(action.payload)
        },

        [getById.fulfilled]: (state, action) => {
            state.book = [action.payload]
            console.log(action.payload)
        },

    },
})

export default Books_Slice.reducer;