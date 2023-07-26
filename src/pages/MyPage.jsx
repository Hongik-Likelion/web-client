import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function MyPage() {
  const [kakaoNickname, setKakaoNickname] = useState('');
  const [kakakoProfileImg, setKakaoProfileImg] = useState('');
  const [kakaoEmail, setKakaoEmail] = useState('');

  useEffect(() => {
    //authorization_code 받아오기
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
          //Access Token으로 사용자 정보 받아오기
          console.log(res);
          const { data } = res;
          const { access_token } = data;

          if (access_token) {
            console.log(`Bearer ${access_token}`);
            axios
              .post(
                'https://kapi.kakao.com/v2/user/me',
                {},
                {
                  headers: {
                    Authorization: `Bearer ${access_token}`,
                    'Content-type': 'application/x-www-form-urlencoded',
                  },
                }
              )

              //필요한 정보 저장
              .then((res) => {
                console.log(res);

                const nickname = res.data.properties.nickname;
                const profileImg = res.data.properties.profile_image;
                const email = res.data.kakao_account.email;

                setKakaoNickname(nickname);
                setKakaoProfileImg(profileImg);
                setKakaoEmail(email);
              });
          } else {
            console.log('access_token 없는 오류 발생!');
          }
        })
        .catch((error) => {
          console.error('Error occurred during API request:', error);
        });
    }
  }, []);

  return (
    <div>
      <MyPageSidebar>
        <Userbar>
          {/*이제 이 img 눌렀을때, 로그아웃되는 API 해야함. */}
          <LogoutButtonImg src="/buttonImg/logoutButton.png" />

          <CircleImg>{kakakoProfileImg && <ProfileImg src={kakakoProfileImg} alt="Kakao Profile" />}</CircleImg>
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
