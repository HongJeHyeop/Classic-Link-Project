import "../../css/home/homeSideBar.css";
import profileImg from "../../images/slide-image2.jfif";

export default function HomeSideBar() {
    return(
        <div id="home-side-bar">
            <div id="profile">
                <img src={profileImg} alt="PROFILE"/>
                <h3>닉네임</h3>
            </div>
            <div id="menu">
                <ul>
                    <li><a href="#">학력</a></li>
                    <li><a href="#">수상경력</a></li>
                    <li><a href="#">연주경력</a></li>
                    <li><a href="#">수업경력</a></li>
                    <li><a href="#">기타경력</a></li>
                </ul>
            </div>
        </div>
    )
}