import React from "react";
import CreatePost from "../../templates/create_post/CreatePost";
import Post from "../../templates/post/Post";
import s from './Profile.module.css'

const Profile = () => {
    return (
        <div>
            <div className={s.bg_img}>
                <img alt='' src="https://oir.mobi/uploads/posts/2021-03/thumbs/1616549190_44-p-fon-sinii-gradient-46.jpg" />
            </div>
            <CreatePost />
            <Post coment='first commit' user='Alla' imgs='http://surl.li/demrv' />
            <Post coment='good commit' user='K .-)' imgs='http://surl.li/denki' /> {/***/}
        </div>

    )
}
export default Profile