import * as path from "path";


export class PathUtil {

    public static root(extension = ""){
        return path.join(__dirname, extension)
    }

    public static staticResources(extension = ""){
        return this.root("./../../electron/static/" + extension);
    }

}