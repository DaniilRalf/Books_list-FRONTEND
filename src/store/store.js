import {configureStore} from "@reduxjs/toolkit";
import Books_Slice from "./features/BooksSlise";
import Authors_Slice from "./features/AuthorsSlise";

export const store = configureStore({
    reducer: {
        books: Books_Slice,
        authors: Authors_Slice
    },
})