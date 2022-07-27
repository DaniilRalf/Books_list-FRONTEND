import style from './Books.module.css'
import BooksItem from "./BooksItem/BooksItem";
import Button from '../../UI/Button/Button';
import {NavLink} from "react-router-dom";

const Books = () => {

    let test = () => {
        console.log('test');
    }

    return (
        <div className="container">
            <div className={style.books}>
                <NavLink to={'/books/add_book'}><Button>Add book</Button></NavLink>
                <BooksItem></BooksItem>
            </div>
        </div>
    );
};

export default Books;
