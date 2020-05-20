const fs = require('fs')

const readdir = path => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            error ? reject(error) : resolve(files.map(fileName => `${path}/${fileName}`))
        });
    });
}

const changePermission = path => {
    return new Promise((resolve, reject) => {
        fs.chmod(path, 0777, err => {
            err ? reject(err) : resolve('done')
        });
    });
}

const distFolder = __dirname + '/dist'
const assetsFolder = `${distFolder}/assets`
const cssFolder = `${distFolder}/css`
const scriptsFolder = `${distFolder}/scripts`

const allFolderPromises = [];

const allFolderPaths = [distFolder, assetsFolder, cssFolder, scriptsFolder]

allFolderPaths.forEach(folder => {
    allFolderPromises.push(readdir(folder))
})

Promise.all(allFolderPromises).then(allData => {
    const allPermissionPromises = []

    allPermissionPromises.push(changePermission(distFolder))

    allData.forEach(folderData => {
        folderData.forEach(data => {
            allPermissionPromises.push(changePermission(data))
        })
    })

    Promise.all(allPermissionPromises).then(() => {
        console.log("Dist folder's Permissions Changed to 777")
    })

}).catch(err => console.log(err))
