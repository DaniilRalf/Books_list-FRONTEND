import style from './Authors.module.css'
import AuthorsItem from "./AuthorsItem/AuthorsItem";
import Button from '../../UI/Button';
import {NavLink} from "react-router-dom";

const Authors = () => {

    let test = () => {
        console.log('test');
    }

    return (
        <div className="container">
            <div className={style.authors}>
                <NavLink to={'/authors/add_author'}><Button onClick={test}>Add author</Button></NavLink>
                <AuthorsItem></AuthorsItem>
            </div>
        </div>
    );
};

export default Authors;
