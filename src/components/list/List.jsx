import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem } from "../../store/itemsSlice";

const List = () => {
  const items = useSelector((state) => state.items.items);
  const dispatch = useDispatch();
  const handleDeleteClick = (index) => {
    dispatch(deleteItem(index));
  };
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => handleDeleteClick(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default List;
