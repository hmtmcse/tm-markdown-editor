const fs = require('fs');
const path = require('path');


const TmMeIOHelper = {

    listDirectory: (directoryPath, relativePath = '') => {
        let results = [];
        let entityDetails = {};
        let newRelativePath = '';
        let list = fs.readdirSync(directoryPath);
        list.forEach(function(fileOrDirName) {
            newRelativePath = relativePath + fileOrDirName;
            entityDetails = {
                'name': fileOrDirName,
                'path': newRelativePath,
                'isDirectory': false,
                'subDirectories': [],
            };
            let newPath = path.join(directoryPath, fileOrDirName);
            let stat = fs.statSync(newPath);
            if (stat && stat.isDirectory()) {
                entityDetails.isDirectory = true;
                entityDetails.subDirectories = TmMeIOHelper.listDirectory(newPath, newRelativePath + '/');
            }
            results.push(entityDetails);
        });
        return results;
    }


};

module.exports = TmMeIOHelper;