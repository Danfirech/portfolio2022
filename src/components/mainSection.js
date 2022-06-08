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
  width: 50%;
`;

const HeaderRight = styled.div`
  height: 100%;
  width: 50%;
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
  z-index: 99;
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
`;

const MiddleTop = styled.div`
  height: 50%;
  width: 50%;
  background-color: white;
  justify-content: center;
  align-items: center;

  .words {
    font-size: 40px;
  }

  /* Pretty Stuff? */
  html {
    background: #011f2a;
  }

  .things > .content {
    float: left;
    width: 50%;
    height: 500px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
  }

  .things > .content h1 {
    font-family: "Arial", sans-serif;
    text-transform: uppercase;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    position: absolute;
    height: 150px;
    color: black;
  }

  /* Arrow */

  .arrow {
    position: relative;
    margin: 0 auto;
    width: 100px;
  }

  .arrow .curve {
    border: 2px solid #be5f4b;
    border-color: transparent transparent transparent black;
    height: 360px;
    width: 1200px;
    border-radius: 230px 0 0 150px;
  }

  .arrow .point {
    position: absolute;
    left: 40px;
    top: 315px;
  }

  .arrow .point:before,
  .arrow .point:after {
    border: 1px solid black;
    height: 25px;
    content: "";
    position: absolute;
  }

  .arrow .point:before {
    top: -11px;
    left: -11px;
    transform: rotate(-74deg);
    -webkit-transform: rotate(-74deg);
    -moz-transform: rotate(-74deg);
    -ms-transform: rotate(-74deg);
  }

  .arrow .point:after {
    top: -20px;
    left: 5px;
    transform: rotate(12deg);
    -webkit-transform: rotate(12deg);
    -moz-transform: rotate(12deg);
    -ms-transform: rotate(12deg);
  }
`;

const MiddleBottom = styled.div`
  height: 70%;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
      <Header></Header>
      <Top>
        <BlueLine></BlueLine>
        <TopLeft>
          <TextBox>
            <h1 style={{ fontSize: 50 }}>
              Designer By Day, Drummer By Night....
            </h1>
            <h1 style={{ fontSize: 20, paddingTop: 45 }}>
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
          <div class="things">
            <div class="content">
              <div class="arrow">
                <div class="curve"></div>
                <div class="point"></div>
              </div>
            </div>
            <div class="content">
              <h1>Check out my most recent projects!</h1>
            </div>
          </div>
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
