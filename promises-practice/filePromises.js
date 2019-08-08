const fs = require("fs");

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
const { promisify } = require('util');
const writeFile = promisify(fs.writeFile);
// const readDir = promisify(fs.readdir)

async function main() {
  await fs.readdir("/tmp", (err, data) => {
    if (err) reject(err);
    else console.info(data);
  });
  await writeFile("/tmp/test4.js", "console.log('Hello World with promisify and Async/Await!');", 
  console.info('file created successfully with promisify and async/await!'));
}
main()
  .then(() => console.log('fuck you this much'))
  .catch(error => console.error(error));