import React from "react";
import s from './Header.module.css'

import Profile from "../pages/profile/Profile";


const Header =()=>{
    return(
        <div className={s.headers}>
            
            <div className={s.logo}>
            logo
            </div>
            <div className={s.link}>
            {/*<Link to='link'/>*/}
            </div>
            <div className={s.search}>
            Search
            </div>
            <div className={s.authorization}>
            authorization
            </div>
            <div className={s.setings}>
            setings
            </div>
            
        </div>
    )
}
export default Header