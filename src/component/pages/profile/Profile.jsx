import React from "react";
import s from './Profile.module.css'

const Profile=()=>{
    return(
    <div>
        <div className={s.bg_img}>
            <img src="https://oir.mobi/uploads/posts/2021-03/thumbs/1616549190_44-p-fon-sinii-gradient-46.jpg" />
        </div>
        <div className={s.post}>
            <div className={s.avatar}>
                <img  src='http://surl.li/demrv'/>
            </div>
            
            <div className={s.post_content}>
                img\text
            </div>
            <div className={s.like}>
                +Like
            </div>
            <div className={s.coments}>
                coments
            </div>
        </div>
        <div className={s.post}>
            <div className={s.avatar}>
                <img  src='http://surl.li/demrv'/>
            </div>
            
            <div className={s.post_content}>
                img\text
            </div>
            <div className={s.like}>
                +Like
            </div>
            <div className={s.coments}>
                coments
            </div>
        </div>
        <div className={s.post}>
            <div className={s.avatar}>
                <img  src='http://surl.li/demrv'/>
            </div>
            
            <div className={s.post_content}>
                img\text
            </div>
            <div className={s.like}>
                +Like
            </div>
            <div className={s.coments}>
                coments
            </div>
        </div>
        
    </div>
    )
}
export default Profile