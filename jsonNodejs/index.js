const fs = require("fs");

const jsondata = {
    name : "mitul",
    age : 21,
    company:"Bitfront Infotech"
};

const dataj = JSON.stringify(jsondata);
fs.writeFile('jsonfile.json', dataj , (err)=>{
    console.log("done");
})

fs.readFile('jsonfile.json', "utf-8" ,(err, data) =>{
    const oridata = JSON.parse(data)
    console.log(data);
    console.log(oridata);
})
// console.log(dataj);
