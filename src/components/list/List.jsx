import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../store/itemsSlice";
import styled from "styled-components";

const List = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const handleDeleteClick = (index) => {
    dispatch(deleteItem(index));
  };
  return (
    <>
      <ul>
        {items.map((item, index) => (
          <Wrapper className="wrapper">
            <li key={index}>{item}</li>
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </Wrapper>
        ))}
      </ul>
    </>
  );
};

const Wrapper = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  margin-top: 16px;
  border-radius: 4px;
`;

export default List;
