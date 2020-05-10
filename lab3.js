"use strict"
const fs = require('fs')

window.addEventListener("load", function (){
    
    fs.readFile('testarlitebara.txt', (err, data) =>{
        this.console.log(data);
    });
});