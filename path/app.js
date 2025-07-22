// path module

const path = require("path");

console.log(path.sep) // => \ => separator 

const filepath = path.join('os', 'app.js'); // join 2 different paths
console.log(filepath);

const base = path.basename(filepath)
console.log(base); // app.js

const complete = path.resolve(__dirname,'os','app.js')
console.log(complete) //C:\Users\Prathamesh Prabhu\OneDrive\Desktop\New folder\os\app.js
console.log(__dirname) // C:\Users\Prathamesh Prabhu\OneDrive\Desktop\New folder