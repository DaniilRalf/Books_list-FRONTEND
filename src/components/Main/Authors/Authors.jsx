import style from './Authors.module.css'
import AuthorsItem from "./AuthorsItem/AuthorsItem";
import Button from '../../UI/Button/Button';
import {NavLink} from "react-router-dom";

const Authors = () => {

    return (
        <div className="container">
            <div className={style.authors}>
                <NavLink to={'/authors/add_author'}><Button>Add author</Button></NavLink>
                <AuthorsItem></AuthorsItem>
            </div>
        </div>
    );
};

export default Authors;
