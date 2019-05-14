import React from "react";
import styled from "styled-components";
import { colors } from "../../config/var";
import { UserIcon } from "../icons";

const SAvatar = styled.div`
  border-radius: 50%;
  width: 30px;
  height: 30px;
  border: 2px solid ${colors.dark_2};
  display: flex;
  align-items: center;
  justify-content: center;
  img,
  svg {
    width: 100% !important;
    height: 100% !important;
    border-radius: 50%;
  }
`;

export default function Avatar(props) {
  return (
    <SAvatar>
      <UserIcon />
    </SAvatar>
  );
}
