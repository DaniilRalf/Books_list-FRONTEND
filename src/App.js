import './App.css';
import {useEffect} from "react";
import {Route, Routes} from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Books from "./components/Main/Books/Books";
import Authors from "./components/Main/Authors/Authors";
import Book from "./components/Main/Books/Book/Book";
// IMPORTS-----------------------------------------

function App() {


    // NAVIGATION--------------------------------------------------
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.href == 'http://localhost:3000/'){
            navigate("/books");
        }
    }, []);
    // NAVIGATION--------------------------------------------------


  return (
    <div className="">
        <Header></Header>
        <Routes>
            <Route path="/books" element={<Books />}></Route>
            <Route path="/books/:id" element={<Book />}></Route>
            <Route path="/authors" element={<Authors />}></Route>
            {/* <Route path="/authors/:id" element={}></Route> */}
        </Routes>
    </div>
  );
}

export default App;
