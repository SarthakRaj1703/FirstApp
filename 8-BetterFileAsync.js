const {readFile, writeFile} = require('fs').promises;
// const util = require('util');
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);

//A better way to do async file reading


const start = async() =>{
    try{
        const first = await readFile('./Built In Modules/Content/first.txt','utf8')
        const second = await readFile('./Built In Modules/Content/second.txt','utf8')
        await writeFile('./Built In Modules/Content/third.txt',
        `This is cool: ${first} ${second}`)
        console.log(first, second);
    }
    catch(error){
        console.log(error);
    }
    
}

start();


// const getText = (path) =>{
//     return new Promise((resolve,reject)=>{
//     readFile(path, 'utf8',(err,data)=>{
//     if(err){
//         reject(err);
//     }
//     else{
//         resolve(data);
//     }
// })
// })
// }

// getText('./Built In Modules/Content/first.txt')
//     .then((result)=>console.log(result))
//     .catch((error)=>console.log(err))