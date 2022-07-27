import style from './BooksItem.module.css'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {getBooks} from "../../../../store/features/BooksSlise";
import {NavLink} from "react-router-dom";

const BooksItem = () => {


    // GET ALL BOOKS-----------------------------------------
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooks());
    }, []);

    const books = useSelector(state => state.books.books);
    // console.log(books)

    let construct = books.map(i => {
        return (
            <div key={i.id} className={style.contain}>
                <NavLink to={`/books/${i.id}`}>
                    <img className={style.img} src={`http://localhost:4000/${i.img}`} />
                </NavLink>
                <p className={style.title}>{i.title}</p>
            </div>
        )
    })
    // GET ALL BOOKS-----------------------------------------

    return (
        <div className={style.books_item}>
            {construct}
        </div>
    );
};

export default BooksItem;
