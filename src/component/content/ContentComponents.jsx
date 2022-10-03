import React from "react"
import Dialogs from "../pages/dialogs/Dialogs"
import Profile from "../pages/profile/Profile"
import NotFoundpage from "../pages/notFoundpage/NotFoundpage";


import {
    Routes,
    Route,
} from "react-router-dom";




const ContentComponents = () => {
    return (
        <div>

            <Routes>

                <Route path='/profile' element={<Profile />} />
                <Route path='/dialogs' element={<Dialogs />} />
                <Route exact path="/" element={<Profile />} />
                <Route path='*' element={<NotFoundpage />} />


            </Routes>

        </div>
    )
}
export default ContentComponents