import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "./components/Login";
import Header from "./components/Header";
import Home from "./components/home/Home";
import CreateAccount from "./components/CreateAccount";

function App() {
    return (
        <div id="wrap">
            {/*<Header/>*/}
            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Login/>}/>
                    <Route path={"/home/*"} element={<Home/>}/>
                    <Route path={"/createAccount"} element={<CreateAccount/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
