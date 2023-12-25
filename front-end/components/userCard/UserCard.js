import React, { useState } from "react";


import { ButtonContainer, CardContainer, InfoContainer } from "./UserCard.Styles";
import Avatar from "../avatar/Avatar";
import Info from "../info/Info";
import Button from "../button/Button";

const UserCard = ({ user }) => {

  // const [seeMore, setSeeMore] = useState(false);

  const determineColor = (status) => {
    switch (status) {
      case 'Active':
        return 'green';
      case 'Pending':
        return 'orange';
      case 'Blocked':
        return 'red';
        case 'Idle':
        return 'lightgray';
      default:
        return 'transparent';
    }
  }

  const color = determineColor(user.subscription.status);
  return (
    <CardContainer>
      <Avatar
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}

      />
      <InfoContainer border="true">
        <Info label={"Nome"}>{`${user.first_name} ${user.last_name}`}</Info>
        <Info label={"Email"}>{user.email}</Info>
        <Info label={"Username"}>{user.username}</Info>
        <Info label={"Job"}>{user.employment.title}</Info>
        <Info label={"Key skill"}>{user.employment.key_skill}</Info>
        <Info label={"Phone number"}>{user.phone_number}</Info>
        <Info label={"Date of birth"}>{user.date_of_birth}</Info>
        <Info label={"Social number"}>{user.social_insurance_number}</Info>
        <Info label={"Gender"}>{user.gender}</Info>
      </InfoContainer>

      <InfoContainer >
        <Info label={"Country"}>{user.address.country}</Info>
        <Info label={"State"}>{user.address.state}</Info>
        <Info label={"City"}>{user.address.city}</Info>
        <Info label={"Street"}>{user.address.street_name}</Info>
        <Info label={"Address"}>{user.address.street_address}</Info>
        <Info label={"Zip Code"}>{user.address.zip_code}</Info>
        <Info label={"Plan"}>{user.subscription.plan}</Info>
        <Info dot={true} color={color} label={"Status"}>{user.subscription.status}</Info>
        

      </InfoContainer>
      {/* <ButtonContainer>
        <Button border="none" onClick={() => setSeeMore(!seeMore)}>
          {seeMore ? "Ver menos" : "Ver mais"}
        </Button>
      </ButtonContainer> */}
    </CardContainer>
  );
};

export default UserCard;
