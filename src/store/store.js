import {configureStore} from "@reduxjs/toolkit";
import Books_Slice from "./features/BooksSlise";

export const store = configureStore({
    reducer: {
        books: Books_Slice,
    },
})