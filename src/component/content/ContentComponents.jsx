import React from "react"
import Dialogs from "../pages/dialogs/Dialogs"
import Profile from "../pages/profile/Profile"



import { Route, Routes} from 'react-router-dom'

const ContentComponents = () => {
    return (
        <div>

            <Routes>
            <Route path='/profile' element={ <Profile />}/>
            <Route path='/dialogs' element={<Dialogs />}/>
            <Route exact path="/"> <Profile /> </Route>
                
            </Routes>

        </div>
    )
}
export default ContentComponents