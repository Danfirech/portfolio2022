import React from "react";
import styled from "styled-components";
import Dan from "../media/dan.png";

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
`;

const BlueLine = styled.div`
  height: 70px;
  width: 100%;
  background-color: #016c8c;
  z-index: 98;
  position: absolute;
  margin-top: 300px;
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
  width: 80%;
  background-color: white;
  margin-left: 100px;


  .wording1 {
    font-size: 50px;
        z-index: 99;

  }

  .wording2 {
    font-size: 20px,
     padding-top: 45px;
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
`;

const ImageBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

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
    display: flex;
    flex-direction: column;
    height: 1300px;
  }
`;

const MiddleTop = styled.div`
  height: 50%;
  width: 50%;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  .words {
    font-size: 40px;
  }
`;

const MiddleBottom = styled.div`
  height: 70%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1068px) {
    display: flex;
    flex-direction: column;
    height: 700px;
  }
`;

const Boxes = styled.div`
  height: 70%;
  width: 20%;
  background-color: white;
  margin-left: 7%;
  margin-right: 7%;
  border: 1px solid grey;
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
  background-color: pink;
`;

const Footer = styled.div`
  height: 80px;
  width: 100%;
  border-top: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainSection = () => {
  return (
    <>
      <Header>
        <HeaderLeft></HeaderLeft>
        <HeaderRight>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </HeaderRight>
      </Header>
      <Top>
        <BlueLine></BlueLine>
        <TopLeft>
          <TextBox>
            <h1 className="wording1">Designer By Day, Drummer By Night....</h1>
            <h1 className="wording2">
              I create simple, clean, user friendly web applications.
            </h1>
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
            <BoxBottom></BoxBottom>
          </Boxes>
          <Boxes>
            <BoxTitle>Telehealth Portal</BoxTitle>
            <BoxBottom></BoxBottom>
          </Boxes>
          <Boxes>
            <BoxTitle></BoxTitle>
            <BoxBottom></BoxBottom>
          </Boxes>
        </MiddleBottom>
      </Middle>
      <Footer>
        <div>DanPossehlDesign</div>
      </Footer>
    </>
  );
};

export default MainSection;
