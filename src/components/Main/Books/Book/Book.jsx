import style from './Book.module.css';
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {getById} from "../../../../store/features/BooksSlise";


const Book = () => {

    // GET BOOK----------------------------------------------
    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getById(id));
    }, []);

    const book = useSelector(state => state.books.book)
    let myBook = book.filter(i => {
        return i.id == id;
    })

    let construct = myBook.map(i => {
        let authorsConstruct = i.authors.map(author => {
            return (
                <p key={author.name}>{author.name}</p>
            )
        })
        return(
            <div key={i.id} className={style.contain}>
                <div className={style.img}></div>
                <p>ID: {i.id}</p>
                <p>Titie: {i.title}</p>
                <p>Authors:</p>{authorsConstruct}
                <p>Description: {i.description}</p>
            </div>
        )
    })
    console.log(construct)
    // GET BOOK----------------------------------------------
    

    return (
        <div className="container">
            <div className={style.book}>
                {construct}
            </div>
        </div>
    );
};

export default Book;
