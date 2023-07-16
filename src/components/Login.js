import '../css/login.css';
import loginImg from "../images/slide-image2.jfif";
import kakaoLogin from "../images/kakao_login_medium_wide.png";
import {useState} from "react";
import axios, {post} from "axios";
import {useNavigate} from "react-router-dom";

// import KakaoLogin from "react-kakao-login";

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPassword, setinputPassword] = useState('');
    const navigate = useNavigate();


    // const kakaoClientId = 'e6614a98ca70367c3dd12efc03a4e518';
    // const kakaoOnSuccess = async (data) => {
    //     console.log(data)
    //     const idToken = data.response.access_token;
    // }
    // const kakaoOnFailure = (error) => {
    //     console.log(error);
    // }

    const loginWithKakao = () => {
        const REDIRECT_URI = 'http://localhost:3000/login/oauth2/kakao';
        const CLIENT_ID = '1abac7009eb6428252bfeef3a599bbe5';
        const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}`
        window.location.href = KAKAO_AUTH_URL;
    }

    const login_post = async () => {
        const body = {inputId: inputId, inputPassword: inputPassword};
        await axios.post('/users/login', body)
            .then(value => {
                console.log(value.data)
                if (value.data.is_logined) {
                    navigate('/home', {
                        state: {
                            user: value.data,
                            test: 'test'
                        }
                    })
                } else {
                    alert('로그인이 실패하였습니다.')
                }

            })
            .catch(reason => console.log(reason))
    }

    return (
        <div id="login">
            <div id="login-wrap">
                <h1>Classic-Link</h1>
                <div>
                    <img src={loginImg} alt="" width="400px" height="400px"/>
                </div>
                <div id="login-box">
                    <h2>Login</h2>
                    <input type="text" placeholder={"아이디"}
                           onChange={(e) => setInputId(e.target.value)}/>
                    <input type="text" placeholder={"비밀번호"}
                           onChange={(e) => setinputPassword(e.target.value)}/>
                    <div id="btn-box">
                        <button onClick={login_post}>로그인</button>
                        <button onClick={() => window.location.href = '/createAccount'}>회원가입</button>
                    </div>
                    <img onClick={loginWithKakao} src={kakaoLogin} alt={""}/>
                    <p>아이디/비밀번호 찾기</p>
                </div>
            </div>
        </div>
    )
}

export default Login;