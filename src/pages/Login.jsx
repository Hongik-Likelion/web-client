import React from 'react';
import styled from "styled-components";
import kakaoLogin from '../icon/kakaoLogin.svg';
//import axios from 'axios';

function Login() {
    const clickToKakao = () => {
        window.location.href = KAKAO_AUTH_URL;
    } // 누르면 저 URL로 감

    const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`; //eslint-disable-line no-unused-vars
    const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`; //eslint-disable-line no-unused-vars
    const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

    return (
        <>
        <Sidebar>
            <Bluebox>
                <Title>
                    로그인이 필요합니다.
                </Title>
                <Text>
                    카카오 계정을 통해 로그인 할 수 있어요!
                    <br />
                    간편한 로그인을 통해 맞춤 추천 기능을 제공 받아보세요!
                </Text>
            </Bluebox>
        </Sidebar>
        <LoginContainer>
            <Exp>
                카카오 계정을 통해 로그인 할 수 있어요!
                <br />
                간편한 로그인을 통해 맞춤 추천 기능을 제공 받아보세요!
            </Exp>
            <KakaoLogin onClick={clickToKakao}></KakaoLogin>
        </LoginContainer>
        </>
    );
}

// isLogin ? <login /> : <logoiut/>
// hasToken ? <p>로그아웃</p> : <p>로그인</p>
const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 110px;
    width: 375px;
    height: 100vh;
    background-color: #FFFFFF;
    z-index: 999;
`;

const Bluebox = styled.div`
    top: 0;
    left: 110px;
    width: 375px;
    height: 190px;
    background-color: #4AB2C9;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
    color: #FFFFFF;
    padding-top: 50px;
    padding-left: 20px;
`;

const Text = styled.div`
    font-size: 13px;
    color: #FFFFFF;
    padding-top: 20px;
    padding-left: 20px;
    line-height: 170%;
`;

const LoginContainer = styled.div`
    position: fixed;
    top: 350px;
    left: 630px;
    width: 350px;
    height: 130px;
    background-color: #FFFFFF;
    border: 3px solid #4AB2C9;
    z-index: 999;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Exp = styled.div`
    font-size: 13px;
    color: #000000;
    line-height: 170%;
    text-align : center;
    margin-bottom: 15px;
`;

const KakaoLogin = styled.div`
    width: 228px;
    height: 35px;
    background-image: url(${kakaoLogin});
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default Login;