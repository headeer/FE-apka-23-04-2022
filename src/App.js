import './App.scss';
import Login from "./components/Start/Login";
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";
import Main from "./components/Main/Main";
import React, {useState} from "react";
import Calendar from "./components/Main/Calendar/Calendar";
import AdminPanel from "./components/Main/AdminPanel/AdminPanel";
import Register from "./components/Start/Register";
import GuardedRoute from "./components/Guards/GuardedRoute";

function Switch(props) {
    return null;
}

function setToken(userToken) {
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken() {
    const tokenString = sessionStorage.getItem('token');
    const userToken = JSON.parse(tokenString);
    return userToken?.token
}

function App() {
    const [token, setToken] = useState();
    const [isAutheticated, setisAutheticated] = useState(false);

    const login = () => {
        setisAutheticated(true);
        console.log('dupa')
    }

    const logout = () => {
        setisAutheticated(false);
    }

    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login setToken={(e) => login(e)}/>}/>
                    <Route path="/register" element={<Register />}/>
                    {/*{isAutheticated &&*/}
                    {/*<>*/}
                        <Route path="/main" element={<Main/>}/>
                        <Route path="/calendar" element={<Calendar/>}/>
                        <Route path="/admin-panel" element={<AdminPanel/>}/>
                    {/*</>*/}
                    {/*}*/}
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
