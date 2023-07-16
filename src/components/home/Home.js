import "../../css/home/home.css";
import Header from "../Header";
import HomeSideBar from "./HomeSideBar";
import {Route, Routes, useLocation} from "react-router-dom";
import HomeMain from "./HomeMain";
import {useEffect, useState} from "react";
import axios from "axios";

function Home() {
    const location = useLocation();
    const userNickName = location.state?.user.nickName;
    const isLogined = location.state?.user.is_logined;

    if (isLogined) {
        return (
            <div id="home">
                <HomeSideBar userNickName={userNickName}/>
                <Routes>
                    <Route path="/" element={<HomeMain/>}/>
                </Routes>
            </div>
        )
    } else if (!isLogined && isLogined === undefined) {
        return window.location.href = '/';
    }
}

export default Home;