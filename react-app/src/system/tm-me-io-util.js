const Fs = require('fs-plus');

export default class TMmeIOUtil {

    static test(){
        let home = Fs.getHomeDirectory();
        console.log(home);
    }

}