var fs = require('fs');

function linesToList(fileName) {
    var lines = fs.readFileSync(fileName).toString().trim().split(/[\n\r]/);
    return lines;
}

function trimEachItem(list) {
    for(var i = 0; i < list.length; i++) {
        list[i] = list[i].toString().trim();
    }
    return list;
}

var prevList = linesToList("companies_prev.txt");
var currList = linesToList("companies.txt");

prevList = trimEachItem(prevList);
currList = trimEachItem(currList);

for(var i = 0; i < prevList.length; i++) {
    var index = currList.indexOf(prevList[i]);
    if (index > -1) {
        currList.splice(index, 1);
        console.log("ever called?");
    }
}

for(var i = 0; i < currList.length; i++) {
    fs.appendFileSync("companies_updated.txt", currList[i] +"\n");
}
