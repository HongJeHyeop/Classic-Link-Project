import "../../css/home/home.css";
import Header from "../Header";
import HomeSideBar from "./HomeSideBar";
import {Route, Routes} from "react-router-dom";
import HomeMain from "./HomeMain";
import {useEffect} from "react";
import axios from "axios";

function Home() {
    useEffect( () => {
        axios.get('/users/loginCheck')
            .then(res => {
                console.log(res.data)
                if(!res.data === 'login'){
                    window.location.href = '/';
                }
            })
            .catch()
    }, []);
    return(
        <div id="home">
            <HomeSideBar/>
            <Routes>
                <Route path="/" element={<HomeMain/>}/>
            </Routes>
        </div>
    )
}

export default Home;