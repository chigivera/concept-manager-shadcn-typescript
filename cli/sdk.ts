import path from "path"
import FastGlob from "fast-glob"
import fs from "fs/promises"




export interface Folder {
    absolutePath : string;
    relativePath : string;
    label : string;
}

interface GetFolderResult {
    folders: Folder[];
}
const transformDashCaseToSentenceCase = (str: string) => {
    return str.split("-").map((s)=> s[0].toUpperCase() + s.slice(1)).join(" ")
    
}

// const files = FastGlob.sync(`C:/Users/Ayman/written-content/**/*.md`)
export const getFolders = async () : Promise<GetFolderResult> => {
    
    const dbPath = path.join(process.cwd(),'../written-content')
    const folders = ( await fs.readdir(dbPath)).filter((f)=>{
        return !f.includes(".")
    })


    return {
        folders: folders.map((f)=> {
            return {
                absolutePath: path.join(dbPath,f),
                relativePath: f,
                label: transformDashCaseToSentenceCase(f) ,
            }
        })
    }
}