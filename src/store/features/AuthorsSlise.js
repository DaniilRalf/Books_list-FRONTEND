import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


let URL_AUTHORS = 'http://localhost:4000/api/authors/';


// GET ALL---------------------------------------------
export const getAuthors = createAsyncThunk(
    'authors/getAuthors',
    async function(){
        const response = await axios.get(`${URL_AUTHORS}get_all`);
        return response.data;
    }
)
// GET ALL---------------------------------------------


// GET ONE---------------------------------------------
export const getById = createAsyncThunk(
    'authors/getById',
    async function(id){
        let body = {
            id: id
        };
        const response = await axios.post(`${URL_AUTHORS}get_by_id`, body);
        return response.data;
    }
)
// GET ONE---------------------------------------------


// CREATE ONE AUTHOR-------------------------------------
export  const createAuthor = createAsyncThunk(
    'authors/createAuthor',
    async function(name){
        let body = {
            name: name
        };
        const response = await axios.post(`${URL_AUTHORS}create`, body);
        return response.data;
    }
)
// CREATE ONE AUTHOR-------------------------------------



const Authors_Slice = createSlice({
    name: 'authors',
    initialState: {
        authors: [],
        author: [],
    },
    extraReducers: {
        [getAuthors.fulfilled]: (state, action) => {
            state.authors = action.payload
            console.log(action.payload)
        },

        [getById.fulfilled]: (state, action) => {
            state.author = [action.payload]
            console.log(action.payload)
        },

    },
})

export default Authors_Slice.reducer;
