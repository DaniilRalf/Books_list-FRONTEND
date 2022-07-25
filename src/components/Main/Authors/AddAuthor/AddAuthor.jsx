import style from './AddAuthor.css';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {createAuthor} from "../../../../store/features/AuthorsSlise";
import Button from "../../../UI/Button/Button";
import Input from "../../../UI/Input/Input";



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
        <div className='container'>
            <div className={style.add_author}>
                <p className={style.input_description}>At the moment it is possible to add an author with only the name, additional information can be added later..</p>
                <div className={style.input_form}>

                    <div className={style.form_name}>
                            <Input type='text'
                                    placeholder={'Enter name'}
                                    value={inputName}
                                    onChange={(e) => changeInpputName(e.target.value)}
                            />
                            <Button onClick={e => onSaveAuthor()}>
                                Save author
                            </Button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AddAuthor;
