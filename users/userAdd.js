var userData = require("./userData.js");
const addUser = function addUser(username, id, profile, server) {
  userData.push({
    username: `${username}`,
    id: `${id}`,
    profile: `${profile}`,
    server: `${server}`
  });
  console.log(userData);
};
module.exports = addUser;
