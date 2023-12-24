import React from "react";

import { CardContainer, InfoContainer } from "./UserCard.Styles";
import Avatar from "../avatar/Avatar";
import Info from "../info/Info";

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <Avatar
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        
      />
      <InfoContainer>
       <Info label={"Nome"}>{`${user.first_name} ${user.last_name}`}</Info>
        <div>Email: {user.email}</div>
      </InfoContainer>
    </CardContainer>
  );
};

export default UserCard;
