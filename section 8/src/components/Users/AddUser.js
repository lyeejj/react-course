import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    //submit 기본적인 이벤트 reloading 막기위함
    event.preventDefault();
  };
  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Age (Years)</label>
      <input id="age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};
export default AddUser;
