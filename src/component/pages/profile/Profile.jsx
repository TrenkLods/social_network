import React from "react";
import Create_post from "../../templates/create_post/Create_post";
import Post from "../../templates/post/Post";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={s.bg_img}>
                <img src="https://oir.mobi/uploads/posts/2021-03/thumbs/1616549190_44-p-fon-sinii-gradient-46.jpg" />
            </div>
            <Create_post/>
            <Post coment='first commit' user='Alla' img='http://surl.li/demrv' />
            <Post coment='good commit' user='K .-)'img='http://surl.li/denki'/>
        </div>

    )
}
export default Profile