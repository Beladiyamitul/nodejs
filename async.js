const fs = require("fs");

fs.writeFile("read.txt" , "hello ,  your work is good" , (err) =>{
    console.log("created Files");
})

fs.appendFile("read.txt" , 'How are you' , (err) =>{
    console.log("complete add");
})
 
fs.readFile("read.txt" , "utf-8" , (err, data)=>{
    console.log(data);
})

fs.rename("read.txt" , "reading.txt" , (err) =>{
    console.log("complete file name changes");
})  