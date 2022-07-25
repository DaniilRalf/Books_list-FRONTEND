import style from './AddAuthor.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createAuthor} from "../../../../store/features/AuthorsSlise";



const AddAuthor = () => {

    // STATE INPUT----------------------------------------
    const [inputName, setInputName] = useState( '');
    let changeInpputName = (value) => {
        setInputName(value);
    }
    // STATE INPUT----------------------------------------


    // POST INPUT DATA------------------------------------
    const dispatch = useDispatch();

    let onSaveAuthor = () => {
        dispatch(createAuthor(inputName));
        setInputName('');
    }
    // POST INPUT DATA------------------------------------


    return (
        <div className={style.add_author}>
            <p className={style.input_description}></p>
            <div className={style.input_form}>

                <div className={style.form_name}>
                    <p>Enter the Author name</p>
                    <input type='text'
                           value={inputName}
                           onChange={(e) => changeInpputName(e.target.value)}
                    />
                    <button onClick={e => onSaveAuthor()}>Save author</button>
                </div>

            </div>
        </div>
    );
};

export default AddAuthor;
