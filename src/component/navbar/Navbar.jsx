import React from "react";
import s from './Navbar.module.css'

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                <Link to="/">home</Link>
                    
                </li>
                <li>
                <Link to="/dialogs">message</Link>
                    
                </li>
                <li>
                <Link to="/news">blog/news</Link>
                    
                </li>
                <li>
                <Link to="/groups">groups</Link>
                    
                </li>
            </ul>
        </div>
    )
}
export default Navbar