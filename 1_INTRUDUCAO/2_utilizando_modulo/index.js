const fs = require("fs");

fs.readFile("frase.txt", "utf-8", (error, data) => {
    if(error) {
        console.log(error);
        return;
    };
    
    console.log(data);
});