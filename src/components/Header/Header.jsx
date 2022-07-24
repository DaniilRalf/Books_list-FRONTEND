import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={style.header}>
            <div className="container">
                <NavLink
                    className={({isActive}) => isActive ? (style.active_link + ' ' + style.link) : (style.nonactive_link +' '+ style.link)}
                    to={'/books'}
                >Books
                </NavLink>
                <NavLink
                    className={({isActive}) => isActive ? (style.active_link + ' ' + style.link) : (style.nonactive_link +' '+ style.link)}
                    to={'/authors'}
                >Author
                </NavLink>
            </div>
        </div>
    );
};

export default Header;