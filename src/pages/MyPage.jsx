import React, { useEffect, useState, useContext } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { LoginInfo } from '../context/LoginUseContext';

function MyPage() {
  const [kakaoNickname, setKakaoNickname] = useState('');
  const [kakaoProfileImg, setKakaoProfileImg] = useState('');
  const [kakaoEmail, setKakaoEmail] = useState('');

  const [userDataFetched, setUserDataFetched] = useState(false);
  const [kakaoAccessToken, setKakaoAccessToken] = useState('');

  const { setLoggedInUser } = useContext(LoginInfo); // useContext 가져온 부분

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      setKakaoAccessToken(accessToken);
      setLoggedInUser(true);
    } else {
      // 로컬 스토리지에 액세스 토큰이 없는 경우 인가코드 받기부터 시작
      const params = new URL(window.location.href).searchParams;
      const code = params.get('code');
      const grant_type = 'authorization_code';
      const client_id = process.env.REACT_APP_CLIENT_ID;
      const redirect_uri = process.env.REACT_APP_REDIRECT_URI;

      if (code) {
        axios
          .post(
            `https://kauth.kakao.com/oauth/token?grant_type=${grant_type}&client_id=${client_id}&redirect_uri=${redirect_uri}&code=${code}`,
            {},
            {
              headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
              },
            }
          )
          .then((res) => {
            console.log(res);

            const { data } = res;
            const { access_token } = data;

            setKakaoAccessToken(access_token);
            // 액세스 토큰을 로컬 스토리지에 저장
            localStorage.setItem('accessToken', access_token);
          })
          .catch((error) => {
            console.error('Error occurred during API request:', error);
          });
      } else {
        // 로그인 페이지로 이동
        window.location.href = '/login';
      }
    }
  }, [setLoggedInUser]);

  useEffect(() => {
    if (kakaoAccessToken) {
      // 액세스 토큰이 있는 경우에만 사용자 정보를 가져오도록 함
      axios
        .post(
          'https://kapi.kakao.com/v2/user/me',
          {},
          {
            headers: {
              Authorization: `Bearer ${kakaoAccessToken}`,
              'Content-type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((res) => {
          setLoggedInUser(true);
          console.log(res);

          const nickname = res.data.properties.nickname;
          const profileImg = res.data.properties.profile_image;
          const email = res.data.kakao_account.email;

          setKakaoNickname(nickname);
          setKakaoProfileImg(profileImg);
          setKakaoEmail(email);
          setUserDataFetched(true); // Set user data fetched status to true
        })
        .catch((error) => {
          console.error('Error occurred during API request:', error);
          // 만약 에러가 발생하면 로그아웃 처리 후 로그인 페이지로 이동
          handleKakaoLogout();
        });
    }
  }, [kakaoAccessToken]);

  // 로그아웃 부분
  const handleKakaoLogout = () => {
    if (kakaoAccessToken) {
      axios
        .post(
          'https://kapi.kakao.com/v1/user/logout',
          {},
          {
            headers: {
              Authorization: `Bearer ${kakaoAccessToken}`,
              'Content-type': 'application/x-www-form-urlencoded',
            },
          }
        )
        .then((res) => {
          console.log('카카오 로그아웃 성공:', res);
          setKakaoAccessToken(''); // 로그아웃 성공 후에 kakaoAccessToken 상태를 초기화
          localStorage.removeItem('accessToken'); // 로그아웃 성공 시 로컬 스토리지에서 토큰 삭제
          setLoggedInUser(false);
          window.location.href = '/login'; // 로그아웃 성공 후 /login 페이지로 리다이렉트
        })
        .catch((error) => {
          console.error('카카오 로그아웃 오류:', error);
        });
    }
  };

  return (
    <div>
      <MyPageSidebar>
        <Userbar>
          {userDataFetched && <LogoutButtonImg src="/buttonImg/logoutButton.png" onClick={handleKakaoLogout} />}

          <CircleImg>{kakaoProfileImg && <ProfileImg src={kakaoProfileImg} alt="Kakao Profile" />}</CircleImg>
          <EditButtonImg src="/buttonImg/editbutton.png" />
          <UserNickname>{kakaoNickname} 님</UserNickname>

          <UserInfoContainer>
            <UserInfo>
              <UserInfoMenu>이름</UserInfoMenu>
              <UserInfoValue>{kakaoNickname}</UserInfoValue>
            </UserInfo>

            <UserInfo>
              <UserInfoMenu>닉네임</UserInfoMenu>
              <UserInfoValue>{kakaoNickname}</UserInfoValue>
            </UserInfo>

            <UserInfo>
              <UserInfoMenu>카카오 연동 이메일</UserInfoMenu>
              <UserInfoValue>{kakaoEmail}</UserInfoValue>
            </UserInfo>
          </UserInfoContainer>
        </Userbar>
      </MyPageSidebar>

      <ClosedButton src="/buttonImg/closedButton.png" />
    </div>
  );
}

const MyPageSidebar = styled.div`
  position: fixed;
  width: 375px;
  height: 100vh;
  background-color: white;
  margin-left: 105px;
  top: 0;
  z-index: 1;
  overflow: hidden;
`;

const Userbar = styled.div`
  position: fixed;
  width: 375px;
  height: 180px;
  background-color: #4ab2c9;
`;

const ClosedButton = styled.img`
  position: fixed;
  margin-left: 470px;
  z-index: 2;
  margin-top: 412px;
`;

const LogoutButtonImg = styled.img`
  position: fixed;
  margin-left: 262px;
  margin-top: 9px;
`;

const CircleImg = styled.div`
  width: 120px;
  height: 120px;
  overflow: hidden;
  border-radius: 50%;
  margin-left: 127.5px;
  margin-top: 22px;
`;

const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const EditButtonImg = styled.img`
  width: 30px;
  height: 30px;
  position: fixed;
  margin-left: 210px;
  margin-top: -30px;
`;

const UserNickname = styled.div`
  color: white;
  font-size: 17px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin-top: 6px;
`;

const UserInfoContainer = styled.div`
  border-style: solid;
  border-color: transparent;
  border-bottom-color: #d9d9d9;
  border-width: 2px;
  height: 260px;
`;

const UserInfo = styled.div`
  border-style: solid;
  border-radius: 10px;
  border-color: #6f6f6f;
  border-width: 1px;
  background-color: #f3f8ff;
  width: 340px;
  height: 48px;
  margin-top: 25px;
  margin-left: 15px;
`;

const UserInfoMenu = styled.div`
  font-size: 11px;
  color: #757575;

  margin-top: 8px;
  margin-left: 10px;
`;
const UserInfoValue = styled.div`
  font-size: 12px;
  margin-left: 10px;
  margin-top: 2px;
  font-size: 14px;
`;

export default MyPage;
