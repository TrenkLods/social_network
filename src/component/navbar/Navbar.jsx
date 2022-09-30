import React from "react";
import s from './Navbar.module.css'
const Navbar = () => {
    return (
        <div className={s.navbar}>
            <ul>
                <li>
                    profile
                </li>
                <li>
                    message
                </li>
                <li>
                    blog/news
                </li>
                <li>
                    groups
                </li>
            </ul>
        </div>
    )
}
export default Navbar