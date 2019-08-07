
const path = require('path');
const filePath = path.join(__dirname, '/files');
const fs = require('fs');


// fs.readdir(filePath, 'utf8', (err, files) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(files);
//   }
// })
// console.log(fs.readdirSync(filePath))
let object = {}
fs.readdirSync(filePath).forEach((file) => {
  let tempObj = JSON.parse(fs.readFileSync(filePath + '/' + file, 'utf8'));
  if (object[tempObj.user]) {
    object[tempObj.user] += tempObj.steps;
  } else {
    object[tempObj.user] = tempObj.steps;
  }
})
console.log(object);