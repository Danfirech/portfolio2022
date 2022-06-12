import React from "react";
import styled from "styled-components";
import Dan from "../media/dan.png";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import StockPhotoTest from "../media/StockPhotoTest.png";
import CopyrightIcon from "@mui/icons-material/Copyright";

const Header = styled.div`
  height: 80px;
  width: 100%;
  border-bottom: 1px solid black;
  display: flex;
`;

const HeaderLeft = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  align-items: center;
`;

const HeaderRight = styled.div`
  height: 100%;
  width: 20%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

const Top = styled.div`
  height: 700px;
  width: 100%;
  background-color: white;
  display: flex;

  @media (max-width: 1068px) {
    height: 1300px;
    display: flex;
    flex-direction: column;
  }
`;

const BlueLine = styled.div`
  height: 70px;
  width: 100%;
  background-color: #016c8c;
  position: absolute;
  margin-top: 270px;
  margin-right: 100px;
  z-index: 1;

  @media (max-width: 1068px) {
    margin-top: 840px;
  }
`;

const TopLeft = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 100px;
`;

const TextBox = styled.div`
  height: 60%;
  width: 100%;
  background-color: white;
  margin-right: 100px;
  margin-left: 100px;

  .wording1 {
    font-size: 70px;
    z-index: 99;
    margin-top: 30px;
    position: relative;
    font-family: "Lora", serif;
    @media (max-width: 1068px) {
      font-size: 40px;
    }
  }

  .wording2 {
    font-size: 20px;
    padding-top: 45px;
    z-index: 99;
    position: relative;
    font-family: "Lora", serif;
    @media (max-width: 1068px) {
      font-size: 20px;
    }
  }
`;

const TopRight = styled.div`
  height: 100%;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BlueBox = styled.div`
  height: 80%;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1068px) {
  }
`;

const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1068px) {
    height: 700px;
    margin-left: 250px;
  }

  img {
    height: 700px;
    width: 200px;
    padding-bottom: 70px;
    z-index: 99;
  }
`;

const Middle = styled.div`
  height: 900px;
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1068px) {
    height: 1300px;
  }
`;

const MiddleTop = styled.div`
  height: 200px;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .words {
    font-size: 40px;
    font-family: "Lora", serif;
    @media (max-width: 1068px) {
      padding-bottom: 150px;
      margin-top: 100px;
      font-size: 40px;
      margin-left: 20px;
    }
  }
`;

const MiddleBottom = styled.div`
  height: 700px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    height: 1900px;
  }
`;

const Boxes = styled.div`
  height: 70%;
  width: 20%;
  background-color: white;
  margin-left: 7%;
  margin-right: 7%;
  border: 1px solid grey;

  @media (max-width: 1068px) {
    margin-bottom: 20px;
    width: 60%;
  }
`;

const BoxTitle = styled.div`
  height: 33%;
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BoxBottom = styled.div`
  height: 67%;
  width: 100%;
  background-color: white;

  .pic {
    width: 100%;
    height: 100%;
  }
`;

const Footer = styled.div`
  height: 80px;
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1068px) {
    display: none;
  }
`;

const MainSection = () => {
  return (
    <>
      <Header>
        <HeaderLeft>
          <div>Welcome! My name is Dan</div>
        </HeaderLeft>
        <HeaderRight>
          <LinkedInIcon />
          <InstagramIcon />
          <GitHubIcon />
        </HeaderRight>
      </Header>
      <BlueLine></BlueLine>
      <Top>
        <TopLeft>
          <TextBox>
            <div className="wording1">
              Designer By Day, Drummer By Night....
            </div>
            <div className="wording2">
              I create simple, clean, user friendly web applications.
            </div>
          </TextBox>
        </TopLeft>
        <TopRight>
          <BlueBox>
            <ImageBox>
              <img src={Dan} />
            </ImageBox>
          </BlueBox>
        </TopRight>
      </Top>
      <Middle>
        <MiddleTop>
          <div className="words">Check out my most current projects!</div>
        </MiddleTop>
        <MiddleBottom>
          <Boxes>
            <BoxTitle>Beet Juice</BoxTitle>
            <BoxBottom>
              <img className="pic" src={StockPhotoTest} />
            </BoxBottom>
          </Boxes>
          <Boxes>
            <BoxTitle>Telehealth Portal</BoxTitle>
            <BoxBottom>
              <img className="pic" src={StockPhotoTest} />
            </BoxBottom>
          </Boxes>
          <Boxes>
            <BoxTitle></BoxTitle>
            <BoxBottom>
              <img className="pic" src={StockPhotoTest} />
            </BoxBottom>
          </Boxes>
        </MiddleBottom>
      </Middle>
      <Footer>
        <CopyrightIcon />
        <div>DanPossehlDesign</div>
      </Footer>
    </>
  );
};

export default MainSection;
