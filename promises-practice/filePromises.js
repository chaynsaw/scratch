const fs = require("fs");
const fsPromises = require('fs').promises;
const path = require('path');

// console.log(fsPromises)

// fsPromises.readdir(path.join(__dirname, '/files'), 'utf8')
//   .then((data) => {
//     data.forEach((file) => fs.readFile(path.join(__dirname, '/files/', file), 'utf8', (err, data) => {
//       if (err) throw err;
//       else {
//         let tmp = JSON.parse(data);
//         if (obj[tmp.user]) {
//           // console.log(obj);
//           obj[tmp.user] += tmp.steps;
//         } else {
//           obj[tmp.user] = tmp.steps;
//         }
//       }
//       fs.writeFile('fileOutput.csv', JSON.stringify(obj), (err) => {
//         if (err) throw err;
//       })
//     }))
//   })
const filePath = path.join(__dirname, '/files');
let obj = {}
fsPromises.readdir(filePath, 'utf8')
  .then((data) => {
    data.forEach((file) => {
      fsPromises.readFile(filePath + '/' + file, 'utf8')
      .then((data) => {
        let tmp = JSON.parse(data);
        if (obj[tmp.user]) {
          obj[tmp.user] += tmp.steps
        } else {
          obj[tmp.user] = tmp.steps;
        }
      })
      .then(() => {
        console.log(Object.keys(obj));
      })
      .then(() => {
        fsPromises.writeFile('fileOutput.txt', JSON.stringify(obj))
      })
    })
  })
  // .then((data) => console.log(data));

// Ordinary err-first callback pattern: 
// fs.writeFile("/tmp/test.js", "console.log('Hello world');", error => {
//     if (error) console.error(error);
//     else console.log("file created successfully!");
// });

// Wrapped in a promise:
// const writeFilePromise = () => {
//   return new Promise((resolve, reject) => {
//     fs.writeFile('/tmp/test.js', "console.log('Hello world');", error => {
//       if (error) reject(error);
//       resolve("file created successfully with handcrafted Promise!");
//       // don't forget to RESOLVE and not do any other weird thing. 
//     })
//   });
// }
// writeFilePromise()
//   .then(result => console.log(result))
//   .catch(error => console.log(error))

// now let's use util.promisify()... could we also use bluebird?
// const util = require("util");
// const Promise = require('bluebird');
// const writeFile = Promise.promisify(fs.writeFile);

// writeFile('/tmp/test3.js', "console.log('Hello world with Promisify!');")
//   .then(() => console.log('file created successfully with promisify!'))
//   .then(() => console.log('also fuck you'))
//   .catch(error => console.log(error));

// Async/Await
// const { promisify } = require('util');
// const writeFile = promisify(fs.writeFile);
// // const readDir = promisify(fs.readdir)

// async function main() {
//   await fs.readdir("/tmp", (err, data) => {
//     if (err) reject(err);
//     else console.info(data);
//   })
//   await writeFile("/tmp/test4.js", "console.log('Hello World with promisify and Async/Await!');", 
//   console.info('file created successfully with promisify and async/await!'));
// }
// main()
//   .then(() => console.log('fuck you this much'))
//   .catch(error => console.error(error));

// Async/Await Practices
// async function f() {
//   setTimeout(() => console.log(1), 1000)
// }