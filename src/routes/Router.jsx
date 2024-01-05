import { Routes } from "react-router-dom"
import CheckAuth from "./CheckAuth"
import LoginPage from "../pages/LoginPage"

 const Router = () => {
    return (
        <Routes>
            <Router path='/login' 
            element={
                <CheckAuth>
                    <LoginPage/>
                </CheckAuth>
            }/>
        </Routes>
    )
 }