import React from "react";
import styled from "styled-components";
import Dan from "../media/dan.png";

const Top = styled.div`
  height: 700px;
  width: 100%;
  background-color: white;
  display: flex;
`;

const TopLeft = styled.div`
  height: 100%;
  width: 40%;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextBox = styled.div`
  height: 60%;
  width: 70%;
  background-color: white;
`;

const TopRight = styled.div`
  height: 100%;
  width: 60%;
  background-color: blue;
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
    height: 600px;
    width: 160px;
    padding-bottom: 70px;
  }
`;

const Middle = styled.div`
  height: 700px;
  width: 100%;
  background-color: purple;
`;

const Bottom = styled.div`
  height: 700px;
  width: 100%;
  background-color: yellow;
`;

const MainSection = () => {
  return (
    <>
      <Top>
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
      <Middle></Middle>
      <Bottom></Bottom>
    </>
  );
};

export default MainSection;
