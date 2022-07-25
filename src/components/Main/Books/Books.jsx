import style from './Books.module.css'
import BooksItem from "./BooksItem/BooksItem";
import Button from '../../UI/Button/Button';

const Books = () => {

    let test = () => {
        console.log('test');
    }

    return (
        <div className="container">
            <div className={style.books}>
                <Button onClick={test}>Add book</Button>
                <BooksItem></BooksItem>
            </div>
        </div>
    );
};

export default Books;
