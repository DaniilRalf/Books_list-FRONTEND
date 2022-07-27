import style from './AddBook.module.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createBook} from "../../../../store/features/BooksSlise";


const AddBook = () => {

    // STATE INPUT----------------------------------------
        let [inputTitle, setInputTitle] = useState('');
        let [inputDescription, setInputDescription] = useState('');
        let [inputImg, setInputImg] = useState('');

        let setTitle = (title) => setInputTitle(title);
        let setDescription = (description) => setInputDescription(description);
        let setImg = async (img) => await setInputImg(img);
    // STATE INPUT----------------------------------------


    // POST INPUT DATA------------------------------------
        const dispatch = useDispatch();
        let saveBook = () => {
            let formData = new FormData();
            formData.append('img', inputImg);
            formData.append('title', inputTitle);
            formData.append('description', inputDescription);
            // console.log(Object.fromEntries(formData)) //отобразить значения форм даты
            dispatch(createBook(formData));
        }
    // POST INPUT DATA------------------------------------


    return (
        <div className={style.add_book}>
            <input value={inputTitle} name='title' type='text' onChange={e => setTitle(e.target.value)}/>
            <input value={inputDescription} name='description' type='text' onChange={e => setDescription(e.target.value)}/>
            <input name='img' type="file" onChange={(e) => setImg(e.target.files[0])}/>

            <button onClick={() => saveBook()}>Save book</button>
        </div>
    );
};

export default AddBook;
