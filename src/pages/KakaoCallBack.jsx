import axios from 'axios';
import React, {useEffect, useState} from 'react';
import styled from "styled-components";
import profileEdit from '../icon/profileEdit.svg';

function KakaoCallBack() {
    const [profileImg, setProfileImg] = useState(null);
    const [nickname, setNickname] = useState(null);
    const [email, setEmail] = useState(null);
    

    useEffect(() => {
        const params = new URL(window.location.href).searchParams;
        const code = params.get("code");
        const grant_type = "authorization_code";
        const REDIRECT_URI = `${process.env.REACT_APP_REDIRECT_URI}`; //eslint-disable-line no-unused-vars
        const REST_API_KEY = `${process.env.REACT_APP_REST_API_KEY}`; //eslint-disable-line no-unused-vars
        // const CLIENT_SECRET = `${process.env.REACT_APP_CLIENT_SECRET}`; //eslint-disable-line no-unused-vars
        // 401 에러

        axios.post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&code=${code}`,
            {},
            {
                headers: {
                    "Content-type" :
                        "application/x-www-form-urlencoded;charset=utf-8",
                },
            }
        )
        .then((response) => {
            console.log(response);
            
            const {data} = response;
            const {access_token} = data;

            if (access_token) {
                console.log(`Bearer ${access_token}`);
                axios.post(
                    "https://kapi.kakao.com/v2/user/me",
                    {},
                    {
                        headers: {
                            Authorization : `Bearer ${access_token}`,
                            "Content-type" : 
                                "application/x-www-form-urlencoded",
                        },
                    }
                )
                .then((response) => {
                    console.log("데이터 성공 : ");
                    console.log(response);
                    
                    setProfileImg(response.data.properties.profile_image);
                    setNickname(response.data.properties.nickname);
                    setEmail(response.data.kakao_account.email);
                    
                });
            } else {
                console.log("access_token 없음");
            }
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);
    
    return (
        <Sidebar>
            <Bluebox>
                <Img src={profileImg} alt="profile image"></Img>
                <Edit></Edit>
                <Nickname>
                    {nickname} 님
                </Nickname>
            </Bluebox>

            <Subbox>
                <Title>
                    이름
                </Title>
                <Text>
                    {nickname}
                </Text>
            </Subbox>

            <Subbox>
                <Title>
                    닉네임
                </Title>
                <Text>
                    {nickname}
                </Text>
            </Subbox>

            <Subbox>
                <Title>
                    카카오 연동 이메일
                </Title>
                <Text>
                    {email}
                </Text>
            </Subbox>
        </Sidebar>
    );
}

const Sidebar = styled.div`
    position: fixed;
    top: 0;
    left: 110px;
    width: 375px;
    height: 100vh;
    background-color: #FFFFFF;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Bluebox = styled.div`
    top: 0;
    left: 110px;
    width: 375px;
    height: 190px;
    background-color: #4AB2C9;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Subbox = styled.div`
    width: 330px;
    height: 45px;
    background-color: #F3F8FF;
    border: 1.5px solid #9E9E9E;
    border-radius: 8px;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`;

const Img = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;
`;

const Edit = styled.div`
    width: 27px;
    height: 27px;
    background-image: url(${profileEdit});
    margin-top: -30px;
    margin-left: 80px;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
`;

const Nickname = styled.div`
    font-size: 20px;
    font-weight: bolder;
    color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 15px;
`;

const Title = styled.div`
    font-size: 7px;
    color: #757575;
    margin-left: 13px;
    margin-top: 5px;
`;

const Text = styled.div`
    font-size: 15px;
    margin-left: 13px;
`;
export default KakaoCallBack;