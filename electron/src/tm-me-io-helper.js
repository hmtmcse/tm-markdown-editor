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
    },

    mkdirP: (directoryPath) => {
        try {
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(directoryPath, {recursive: true});
            }
        } catch (error) {
            return false;
        }
        return true;
    },

    readFile: (filePath) => {
        try {
            if (!fs.existsSync(filePath)) {
                return null;
            }
           return fs.readFileSync(filePath, "utf-8");
        } catch (error) {
            return null;
        }
    },

    writeFile: (filePath, data) => {
        try {
            fs.writeFileSync(filePath, data);
        } catch (error) {
            return false;
        }
        return true;
    },

    deleteFile: (filePath) => {
        try {
            if (!fs.existsSync(filePath)) {
                return false;
            }
            fs.unlinkSync(filePath);
        } catch (error) {
            return false;
        }
        return true;
    },

    deleteDir: (directoryPath) => {
        try {
            if (fs.existsSync(directoryPath)) {
                fs.readdirSync(directoryPath).forEach(function (fileOrDirName, index) {
                    let currentPath = path.join(directoryPath, fileOrDirName);
                    if (fs.lstatSync(currentPath).isDirectory()) {
                        TMmeIOUtil.deleteDir(currentPath);
                    } else {
                        fs.unlinkSync(currentPath);
                    }
                });
                fs.rmdirSync(directoryPath);
            }
        } catch (error) {
            return false;
        }
        return true;
    },

    rename: (oldPath, newPath) => {
        try {
            fs.renameSync(oldPath, newPath);
        } catch (error) {
            return false;
        }
        return true;
    },
};

module.exports = TmMeIOHelper;