import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

function MyPage() {
  const [kakaoNickname, setKakaoNickname] = useState('');
  const [kakakoProfileImg, setKakaoProfileImg] = useState('');
  const [kakaoEmail, setKakaoEmail] = useState('');

  //authorization_code 받아오기
  useEffect(() => {
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

        //Access Token으로 사용자 정보 받아오기
        .then((res) => {
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
                console.log(res.data.properties.nickname);
                console.log(res.data.properties.profile_image);
                console.log(res.data.kakao_account.email);

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
          <p>{kakaoNickname}</p>
          <p>{kakaoEmail}</p>
          {kakakoProfileImg && <img src={kakakoProfileImg} alt="Kakao Profile" />}
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

export default MyPage;
