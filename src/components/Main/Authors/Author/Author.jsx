import style from './Author.module.css';
import {useParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {getById} from "../../../../store/features/AuthorsSlise";



const Author = () => {

  // GET BOOK----------------------------------------------
    const {id} = useParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getById(id));
    }, []);

    const author = useSelector(state => state.authors.author)
    let myAuthor = author.filter(i => {
        return i.id == id;
    })

    let construct = myAuthor.map(i => {
        return(
            <div key={i.id} className={style.contain}>
                <p>Nmae: {i.name}</p>
            </div>
        )
    })
  // GET BOOK----------------------------------------------
  

  return (
      <div className="container">
        {construct}
      </div>
  );
};

export default Author;