import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../store/itemsSlice";
import styled from "styled-components";

const Input = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddClick = () => {
    if (inputValue.trim() !== "") {
      dispatch(addItem(inputValue));
      setInputValue("");
    }
  };

  return (
    <Wrapper className="wrapper">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="할 일을 적어주세요."
      />
      <button onClick={handleAddClick}>Add</button>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #ffedf0;
`;

export default Input;
