import style from './Authors.module.css'
import AuthorsItem from "./AuthorsItem/AuthorsItem";
import Button from '../../UI/Button';

const Authors = () => {

    let test = () => {
        console.log('test');
    }

    return (
        <div className="container">
            <div className={style.authors}>
                <Button onClick={test}>Add author</Button>
                <AuthorsItem></AuthorsItem>
            </div>
        </div>
    );
};

export default Authors;