import React from "react";

import { CardContainer, InfoContainer } from "./UserCard.Styles";
import Avatar from "../Avatar";

const UserCard = ({ user }) => {
  return (
    <CardContainer>
      <Avatar
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        size="fit-content"
      />
      <InfoContainer>
        <div>
          Nome: {user.first_name} {user.last_name}
        </div>
        <div>Email: {user.email}</div>
      </InfoContainer>
    </CardContainer>
  );
};

export default UserCard;
