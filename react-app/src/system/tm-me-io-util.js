const fs = require('fs');

export default class TMmeIOUtil {

    static test(){
        fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
            if (err) throw err;
            console.log('Saved!');
        });
    }

}