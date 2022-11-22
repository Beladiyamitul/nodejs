const http = require("http");
const fs =require("fs");

const server = http.createServer((request , response) => {

    const jdata =  fs.readFileSync(`${__dirname}/UserApi/userapi.json` , "utf-8" )
    // const nordata = JSON.parse(jdata)


    if(request.url === "/"){
        response.end("Hello from the Home side college");
    }else if(request.url === "/about"){
        response.end("Hello from the About side college");
    }else if(request.url === "/services"){
        response.end("Hello from the services side college");
    }
    else if(request.url === "/userapi"){
        response.end(jdata);
    }else{
        response.writeHead(404,{"content-type" : "text/html"});
        response.end("404 page not found");
    }
});

server.listen(5000, () => {
    console.log("listening ");
});