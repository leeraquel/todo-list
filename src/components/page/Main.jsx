import React from "react";
import Input from "../input/Input";
import List from "../list/List";
import styled from "styled-components";

const Main = () => {
  return (
    <Wrapper>
      <Input></Input>
      <List></List>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
`;

export default Main;
