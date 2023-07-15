import '../../css/home/homeMain.css';
import axios from "axios";

export default function HomeMain() {
    const logout = async () => {
        await axios.post('/users/logout')
            .then(res => {
                console.log(res)
                window.location.href='/'
            })
            .catch(err => console.log(err))

    }


    return (
        <div id="home-main">
            <h1>홈화면</h1>
            <button onClick={logout}>logout</button>
        </div>
    )
}