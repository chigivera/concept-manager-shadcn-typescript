import FastGlob from "fast-glob"
import path from "path"
import fs from "fs"
import { getFolders } from "./sdk"


const main = async () => {
    const {folders} = await getFolders()
    console.log(folders)
}
main().catch((e)=>{
    console.error(e)
    process.exit(1)
})