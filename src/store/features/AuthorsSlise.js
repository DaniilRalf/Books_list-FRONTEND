import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


let URL_AUTHORS = 'http://localhost:4000/api/authors/';


// GET ALL---------------------------------------------
export const getAuthors = createAsyncThunk(
    'books/getAuthors',
    async function(){
        const response = await axios.get(`${URL_AUTHORS}get_all`);
        return response.data;
    }
)
// GET ALL---------------------------------------------


// // GET ONE---------------------------------------------
// export const getById = createAsyncThunk(
//     'books/getById',
//     async function(id){
//         let body = {
//             id: id
//         };
//         const response = await axios.post(`${URL_AUTHORS}get_by_id`, body);
//         return response.data;
//     }
// )
// // GET ONE---------------------------------------------



const Authors_Slice = createSlice({
    name: 'authors',
    initialState: {
        authors: [],
        // book: [],
    },
    extraReducers: {
        [getAuthors.fulfilled]: (state, action) => {
            state.authors = action.payload
            console.log(action.payload)
        },

        // [getById.fulfilled]: (state, action) => {
        //     state.book = [action.payload]
        //     console.log(action.payload)
        // },

    },
})

export default Authors_Slice.reducer;