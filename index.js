const fs = require("fs");

// ====== Create New File ========

fs.writeFileSync("createfile.txt" , "welcome")
fs.writeFileSync("cratefile.txt" , "welcome to node js")

// fs.appendFileSync("cratefile.txt" , "How Are You I Am Fine")

// ======== READ FILE DATA ==========

// const buf_data = fs.readFileSync('createfile.txt', 'utf-8')

// ========== RENAME FILE ==========

// fs.renameSync("createfile.txt" , "createnew.txt" )

// ========== Delete FILE ==========

// fs.unlinkSync("createnew.txt")


// ======= Only Practice ===========


// fs.writeFileSync("readfile.txt" , "Tsting file")

// fs.appendFileSync("readfile.txt" , "How Are You")

// const readonly = fs.readFileSync("readfile.txt", "utf8")

// fs.renameSync("readfile.txt" , "readingfile.txt")

// fs.unlinkSync("readingfile.txt")







