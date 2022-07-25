import style from './Input.module.css';

const Input = ({...props}) => {
    return(
        <input {...props} className={style.input}/>
    )
}

export default Input;
