import React from "react";
import s from './Post.module.css'
const Post = (props) => {
    return (
        <div>
            
            <div className={s.post}>
                <div className={s.avatar}>
                    <img src={props.img} />
                </div>
                <div className={s.user}>
                    {props.user}
                </div>
                <div className={s.post_content}>
                     -{props.coment}
                </div>
                <div className={s.addition_date}>
<div className={s.like}>
                    <button>+Like</button>
                    <button>-Dislike</button>
                </div>
                <div className={s.coments}>
                    coments 
                </div>
                </div>
                
            </div>
        </div>
    )
}
export default Post