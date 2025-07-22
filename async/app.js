// async =>

const { readFile, writeFile } = require('fs');

// callback function passed as a argument to a fn then return value from that fn
// err => error and res => result
readFile('./simple/second.txt','utf-8', (err, res) => {
	if (err) {
    console.log("error : " , err)
		return;
	}
	// const read = res;
  console.log(res)
});

writeFile('./simple/first.txt','backend',(err,res)=>{
  if (err) {
    console.log("error : " , err)
    return;
  };
  console.log(res)
})


// for async and sync 👇

// // const {readFileSync , writeFileSync} = require('fs');
// const {readFile , writeFile} = require('fs');
// console.log("1")
// // const read = readFileSync('./simple/first.txt', 'utf-8');
// readFile('./simple/first.txt', 'utf-8', (err, res) => {
//   if (err) return;
//   console.log(res)
// })
// console.log("3")