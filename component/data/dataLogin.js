// dataLogin.js

let users = [
  {
    username: "nlduc1207",
    password: "12072001",
    email: "nlduc1207@gmail.com",
  },
  {
    username: "teo",
    password: "123",
    email: "teo@gmail.com",
  },
];

const addUser = (newUser) => {
  users.push(newUser);
};
export {addUser };
export default users;