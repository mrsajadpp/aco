var userData = require("./userData.js");
function userRe(userStore, userCode) {
  console.log('Removed');
  const newData = userData;
  userData = newData.splice(userCode);
  console.log(userData);
}
module.exports = userRe;
