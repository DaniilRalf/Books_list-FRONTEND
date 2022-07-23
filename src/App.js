import './App.css';
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {getBooks} from "./store/features/BooksSlise";
import {useEffect} from "react";

function App() {

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getBooks());
    }, []);

    const books = useSelector(state => state.books.books)
    let construct = books.map(i => {
        return <div key={i.id}>{i.title}</div>
    })

  return (
    <div className="">
        {construct}
    </div>
  );
}

export default App;
