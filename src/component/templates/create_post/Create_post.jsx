import React from "react";
import s from './Create_post.module.css'

const Create_post=()=>{
    return(
        <div className={s.create_post}>
            
                <label className={s.label_post}> create new post</label>
                <textarea className={s.input_date} rows="5" cols="33" > input date </textarea>
                <button className={s.add_post}>AddPost</button>
                <button className={s.preview_post}>Preview</button>
            
        </div>
    )
}
export default Create_post