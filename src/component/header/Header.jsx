import { React } from "react";
import s from './Header.module.css'

import { Router,Link } from "react-router-dom";



const Header =()=>{
    return(
        
        
        <div className={s.headers}>
            
            <div className={s.logo}>
              <Link to="/">logo</Link>
            </div>
            <div className={s.link}>
            <Link to="/link">link</Link>
            </div>
            <div className={s.search}>
             <Link to="/Search">Search</Link>
            </div>
            <div className={s.authorization}>
             <Link to="/authorization">authorization</Link>
            </div>
            <div className={s.setings}>
             <Link to="/setings">setings</Link>
            </div>
            
        </div>
        
    )
}
export default Header