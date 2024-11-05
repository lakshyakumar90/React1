import React from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/Redux store/cartSlice";

const AddButton = ({ item }) => {
  
  const dispatch = useDispatch()
  const handleAddItem = (item) => {
    //dispatch and action
    dispatch(addItem(item))
  }

  return <button onClick={()=> handleAddItem(item)} className="dish-add-button">Add</button>;
};

export default AddButton;
