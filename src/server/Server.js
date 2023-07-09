const express = require('express');
const session = require('express-session');
const fileStore = require('session-file-store')(session);
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 4000;
const db = require('./Connection.js');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors({origin : 'http://localhost:3000'}));
app.use(cookieParser());
app.use(
    session({
        httpOnly: true,
        secure: true,
        secret: "@haAdvanced",
        resave: false,
        saveUninitialized: true,
        cookie: {
            httpOnly: true,
            secure: true
        },
        store:new fileStore()
    })
);

app.get('/', (req, res) => {
    console.log('루트 접속')
    res.send('asdf')
})

// 회원가입
app.post('/createAccount', (req,res) => {
    console.log('/createAccount : 회원가입 요청')
    const {id, pw, name, nickName, phone, email, major} = req.body;
    console.log(req.body);
    db.query(`INSERT INTO classic_link_db.user_tbl VALUES ('${id}', '${pw}', '${name}', '${nickName}',
                                             '${phone}', '${email}', '${major}')`,
        (err, data) => {
            if(!err) {
                console.log('가입성공')
                console.log(data)
                res.send('회원가입 성공' + data.toString());
            } else {
                console.log(err)
                res.send(err);
            }
    });
})
app.listen(PORT, () => {
    console.log(`Server On : http://localhost:${PORT}`)
})