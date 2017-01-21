/**
 * Created by themakeshack on 1/21/17.
 */
var fs = require("fs");

fs.readFile('input.txt', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
    console.log("Program is ending inside the callback!");
});

console.log("Program Ended");