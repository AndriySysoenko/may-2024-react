import React from 'react';
import {Link} from "react-router-dom";
import styles from './MenuStyle.module.css'

const Menu = () => {
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

            </ul>
        </div>
    );
};

export default Menu;