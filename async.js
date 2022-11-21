const fs = require("fs");

fs.writeFile("read.txt" , "hello ,  your work is good" , (err) =>{
    console.log("created Files");
})
