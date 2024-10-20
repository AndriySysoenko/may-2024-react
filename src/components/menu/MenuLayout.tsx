import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MenuLayoutStyle.module.css'

const MenuLayout = () => {
    return (
        <div>
            <ul className={styles.menu}>
                <li className={styles.viewItem}>
                    <Link to ={'/users'}>Users</Link>
                </li>
                <li className={styles.viewItem}>
                    <Link to ={'/posts'}>Posts</Link>
                </li>
            </ul>
        </div>
    );
};

export default MenuLayout;