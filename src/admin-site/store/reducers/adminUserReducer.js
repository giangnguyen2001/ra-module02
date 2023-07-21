import { createReducer } from "@reduxjs/toolkit";

const users = [
  {
    id: 1,
    firstN: "Fortune",
    lastN: "John",
    email: "user@gmail.com",
    password: btoa("user"),
    role: "user",
  },
  {
    id: 2,
    firstN: "Pico",
    lastN: "Boku",
    email: "user1@gmail.com",
    password: btoa("user"),
    role: "user",
  },
  {
    id: 3,
    firstN: "Steiner",
    lastN: "Hans",
    email: "user3@gmail.com",
    password: btoa("user"),
    role: "user",
  },
  {
    id: 4,
    firstN: "Aunt",
    lastN: "Neighbor",
    email: "user4@gmail.com",
    password: btoa("user"),
    role: "user",
  },
];

const userProducer = createReducer(
  { users: users },
  {
    ADMIN_DELETE_USER: (state, action) => {
      console.log(action.payload);
      let newUser = state.users.filter((user) => user.id !== action.payload);

      return {
        ...state,
        users: newUser,
      };
    },
  }
);

export default userProducer;
