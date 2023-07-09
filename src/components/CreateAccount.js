import '../css/createAccount.css'

import axios from "axios";

import Header from "./Header";
import {useRef} from "react";

function CreateAccount() {
    const idRef = useRef(null);
    const pwRef = useRef(null);
    const nameRef = useRef(null);
    const nickNameRef = useRef(null);
    const phoneRef = useRef(null);
    const emailRef = useRef(null);
    const majorRef = useRef(null);


    const post_create_account = async () => {
        const id = idRef.current.value;
        const body = {
            id : id,
            pw : pwRef.current.value,
            name : nameRef.current.value,
            nickName : nickNameRef.current.value,
            phone : phoneRef.current.value,
            email : emailRef.current.value,
            major : majorRef.current.value
        }
        console.log(body)
       await axios.post('/users/createAccount', body)
            .then(value => {
                console.log(value)
            })
            .catch(reason => {
                console.log(reason)
            })
        // console.log(res.data)
    }

    return (
        <div id="create-account">
            <Header/>
            <div id="create-account-wrap">
                <h2>회원가입</h2>
                <table>
                    <tr>
                        <td>아이디</td>
                        <td><input type="text" ref={idRef}/></td>
                    </tr>
                    <tr>
                        <td>비밀번호</td>
                        <td><input type="password" ref={pwRef}/></td>
                    </tr>
                    <tr>
                        <td>비밀번호 재확인</td>
                        <td><input type="password"/></td>
                    </tr>
                    <tr>
                        <td>이름</td>
                        <td><input type="text" ref={nameRef}/></td>
                    </tr>
                    <tr>
                        <td>닉네임</td>
                        <td><input type="text" ref={nickNameRef}/></td>
                    </tr>
                    <tr>
                        <td>연락처</td>
                        <td><input type="text" ref={phoneRef}/>&nbsp;&nbsp;&nbsp;"-" 하이픈 제외 ex) 01012341234</td>
                    </tr>
                    <tr>
                        <td>이메일</td>
                        <td><input type="email" ref={emailRef}/></td>
                    </tr>
                    <tr>
                        <td>전공</td>
                        <td><input type="text" ref={majorRef}/></td>
                    </tr>
                </table>
                <div id="account-btn-box">
                    <button onClick={post_create_account}>회원가입</button>
                    <button onClick={() => window.location.href='/'}>돌아가기</button>
                </div>
            </div>
        </div>
    )
}

export default CreateAccount;