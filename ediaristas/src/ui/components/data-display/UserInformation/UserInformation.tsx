// ESTILIZAÇÃO DO COMPONENTE UserInformation
// -----------------------------------------

// importando o react
import React from "react";

// importando estilização
import {
  UserInformationContainer,
  UserName,
  UserDescription,
  AvatarStyled,
  RatingStyled,
} from "./UserInformation.style";

// criando a tipagem
interface UserInformationProps {
  picture: string;
  name: string;
  rating: number;
  description?: string;
}

// criando o componente com a tipagem
const UserInformation: React.FC<UserInformationProps> = ({
  picture,
  name,
  rating,
  description,
}) => {
  return (
    <UserInformationContainer>
      <AvatarStyled src={picture}>{name[0]}</AvatarStyled>
      <UserName>{name}</UserName>
      <RatingStyled readOnly value={rating} />
      <UserDescription>{description}</UserDescription>
    </UserInformationContainer>
  );
};

// exportando o componente
export default UserInformation;
