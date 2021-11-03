import React from "react";
import styled from "styled-components";

export const ProfileImage = ({ image, name, textColor }) => {
  return (
    <ProfileContainer>
      <Profile src={image} alt="person" />
      <Overlay>
        <Text style={{ color: textColor }}>
          <p>{name}</p>
        </Text>
      </Overlay>
    </ProfileContainer>
  );
};

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
`;

const Text = styled.p`
  display: none;
`;

const ProfileContainer = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  margin: 40px;
  &:hover {
    ${Overlay} {
      background-color: rgba(17, 17, 17, 0.73);
    }
    ${Text} {
      display: flex;
      text-align: center;
      position: absolute;
      top: 0px;
      left: 0px;
      font-size: 30px;
      font-weight: 700;
    }
  }
`;
const Profile = styled.img`
  border-radius: 50%;
  width: 200px;
  height: 200px;
  object-fit: cover;
`;
