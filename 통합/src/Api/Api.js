import axios from "axios";
import qs from "qs";


//메인페이지
///lecture/findAllList/?option=lectureSatisfactionAvg&page=1 데이터 받아옴
export const mainApi = (setData) => {
    const url = "/lecture/findAllList/?option=lectureSatisfactionAvg&page=1"

    const options = {
        method: "GET",
        url
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r);
            setData(r.data)
        }, (error) => {
            console.log(error.response);
        }
    )
}
//공지사항api 확인 필요
export const noticeApi = (setData) => {

    const url = "/notice/findAllList"

    const options = {
        method: "GET",
        url
    };

    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data)
        }, (error) => {
            console.log(error.response);
        }
    )
}

//회원가입 api 0 
export const registerApi = (setData, id, pw, email) => {
    const url = "/user/join"

    const data = {
        loginId: id,
        password: pw,
        email: email
    }

    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
        },
        (error) => {
            console.log(error.response.data);
            console.log(data)
        }
    );
}


//로그인api 0
export const loginApi = (setData, id, pw) => {
    const url = "/user/login";

    const data = {
        loginId: id,
        password: pw,
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
        },
        (error) => {
            console.log(error.response);
            console.log(data)
        }
    );
};

//아이디 찾기api
export const findIdApi = (setData, email) => {
    const url = "/user/find-id";

    const data = {
        email: email
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
        },
        (error) => {
            console.log(error.response);
            console.log(data)
        }
    );
};

//비밀번호 찾기api
export const findPwApi = (setData, id, email) => {
    const url = "/user/find-pw";

    const data = {
        loginId: id,
        email: email
    };
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        data: data,
        url,
    };
    axios(options).then(
        (r) => {
            console.log("connect");
            console.log(r.data);
            setData(r.data);
        },
        (error) => {
            console.log(error.response);
            console.log(data)
        }
    );
};