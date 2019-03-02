const fs = require('fs');
const path = require('path');


const TmMeIOHelper = {

    listDirectory: (directoryPath) => {
        let results = [];
        let list = fs.readdirSync(directoryPath);
        list.forEach(function(fileOrDirName) {
            console.log(fileOrDirName);
            let newPath = path.join(directoryPath, fileOrDirName);
            let stat = fs.statSync(newPath);
            if (stat && stat.isDirectory()) {
                results = results.concat(TmMeIOHelper.listDirectory(newPath));
            } else {
                results.push(fileOrDirName);
            }
        });
        return results;
    }


};

module.exports = TmMeIOHelper;