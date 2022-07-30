import style from './AuthorsItem.module.css'
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {getAuthors} from "../../../../store/features/AuthorsSlise";
import {NavLink} from "react-router-dom";

const AuthorsItem = () => {


    // GET ALL BOOKS-----------------------------------------
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAuthors());
    }, []);

    const authors = useSelector(state => state.authors.authors)
    let construct = authors.map(i => {
        return (
            <div key={i.id} className={style.contain}>
                <NavLink to={`/authors/${i.id}`}>
                    <div className={style.body}>
                        <div className={style.img}></div>
                        <p className={style.title}>{i.name}</p>
                    </div>
                </NavLink>
            </div>
        )
    })
    // GET ALL BOOKS-----------------------------------------

    return (
        <div className={style.authors_item}>
            {construct}
        </div>
    );
};

export default AuthorsItem;