import React, {FC} from 'react';
import {Link} from "react-router-dom";
import styles from './MenuStyle.module.css'
import {IUserInfo} from "../../models/IUserInfo";

type MenuInfoProps = {
    userData?: IUserInfo
}
const Menu:FC<MenuInfoProps> = ({userData}) => {
    return (
        <div>
            <ul className={styles.menu}>
                <li>
                    <Link to={'/'}>Home</Link>
                </li>
                <li>
                    <Link to={'/login'}>Login</Link>
                </li>
                <li>
                    <Link to={'/carts'}>Carts</Link>
                </li>
                <li>
                    {userData?.firstName} {userData?.lastName}
                </li>
            </ul>
        </div>
    );
};

export default Menu;