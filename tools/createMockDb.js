const fs = require("fs");
const path = require("path");
const mockData = require('./mockData');

const {apps} = mockData;
const data = JSON.stringify({apps});
const filePath = path.join(__dirname,'db.json');

fs.writeFile(filePath,data,function(err){
    err ? console.log(err): console.log("Mock db was successfully created.");
});
