import "../../css/home/home.css";
import Header from "../Header";
import HomeSideBar from "./HomeSideBar";
import {Route, Routes} from "react-router-dom";
import HomeMain from "./HomeMain";

function Home() {
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