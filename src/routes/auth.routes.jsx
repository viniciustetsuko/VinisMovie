import { Routes, Route, Navigate } from 'react-router-dom'
import { Signin } from '../pages/Signin'
import { SignUp } from '../pages/SignUp'


export function AuthRoutes() {
    const user = localStorage.getItem("@tetsumovies:user");
    return (
        <Routes>
            <Route path='/register' element={<SignUp/>}/>
            <Route path='/' element={<Signin/>}/>

        {!user  && <Route path='*' element={<Navigate to="/"/>}/>} 
        </Routes>
    )
}