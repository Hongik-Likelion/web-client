import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import styled from 'styled-components';

function LoginPage() {
  const [openModal, setModalOpen] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    //이미 로그인이 되어 있다면, 바로 mypage로 이동
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      navigate('/mypage');
    }
  }, [navigate]);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <LoginPageSidebar>
        <InfoBar>
          <LoginAlert>로그인이 필요합니다.</LoginAlert>
          <FirstLoginLine>카카오 계정을 통해 로그인 할 수 있어요!</FirstLoginLine>
          <SecondLoginLine>간편한 로그인을 통해 맞춤 추천 기능을 제공 받아보세요!</SecondLoginLine>
        </InfoBar>
      </LoginPageSidebar>

      <Modal
        isOpen={openModal}
        onRequestClose={closeModal}
        style={{
          overlay: {
            backgroundColor: 'transparent',
            height: '100vh',
          },
          content: {
            width: '370px',
            height: '130px',
            marginLeft: '770px',
            marginTop: '280px',
            borderStyle: 'solid',
            borderColor: '#4AB2C9',
          },
        }}
      >
        <div>
          <FirstLine>카카오 계정을 통해 로그인 할 수 있어요!</FirstLine>
          <SecondLine>간편한 로그인을 통해 맞춤 추천 기능을 제공 받아보세요!</SecondLine>
          <a href={process.env.REACT_APP_KAKAO_AUTH_URL}>
            <KakaoImg src="/buttonImg/kakaoLoginButton.png" />
          </a>

          <XButton src="/buttonImg/X.png" onClick={closeModal} />
        </div>
      </Modal>

      <BackGroundEffect></BackGroundEffect>
      <ClosedButton src="/buttonImg/closedButton.png" />
      <LoginpageSelectionBar src="/menuIcon/selectedBar.png" />
    </div>
  );
}

const LoginPageSidebar = styled.div`
  position: fixed;
  width: 375px;
  height: 100vh;
  background-color: white;
  margin-left: 105px;
  top: 0;
  z-index: 1;
  overflow: hidden;
`;

const BackGroundEffect = styled.div`
  position: fixed;
  background-color: rgba(128, 128, 128, 0.3);
  height: 100vh;
  width: 1500px;
  top: 0;
  margin-left: 200px;
  overflow: hidden;
`;

const InfoBar = styled.div`
  position: fixed;
  width: 375px;
  height: 180px;
  background-color: #4ab2c9;
`;

const LoginAlert = styled.h2`
  color: white;
  margin-top: 40px;
  margin-left: 20px;
`;

const FirstLoginLine = styled.div`
  color: white;
  margin-left: 20px;
  margin-bottom: 5px;
  font-size: 13px;
`;

const SecondLoginLine = styled.div`
  color: white;
  margin-left: 20px;
  font-size: 13px;
`;

const FirstLine = styled.p`
  color: black;
  font-size: 13px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const SecondLine = styled.p`
  color: black;
  font-size: 13px;
  margin-top: -8px;
  font-weight: bold;
  display: flex;
  justify-content: center;
`;

const KakaoImg = styled.img`
  position: fixed;
  margin-left: 10px;
  margin-top: 5px;
`;

const XButton = styled.img`
  position: fixed;
  width: 12px;
  height: 14px;
  margin-top: -80px;
  margin-left: 370px;
`;

const ClosedButton = styled.img`
  position: fixed;
  margin-left: 470px;
  z-index: 2;
  margin-top: 412px;
`;

const LoginpageSelectionBar = styled.img`
  position: fixed;
  margin-left: 100px;
  margin-top: 520px;
  z-index: 2;
`;

export default LoginPage;
