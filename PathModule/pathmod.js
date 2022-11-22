const path = require("path");

console.log(path.dirname('F:/nodejs/PathModule/pathmod.js'));
console.log(path.extname('F:/nodejs/PathModule/pathmod.js'));
console.log(path.basename('F:/nodejs/PathModule/pathmod.js'));
const mypath = (path.parse('F:/nodejs/PathModule/pathmod.js'));
console.log(mypath.name);