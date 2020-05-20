const chmodr = require('chmodr')

const distFolder = __dirname + '/dist'
try{
    chmodr(distFolder, '0o777', err => {
        if(err) console.log('ERROR.\n', 'Could NOT Change file Permissions.\n', 'Future Builds Might FAIL.\n', 'Remove Build Folder or change Permissions MANUALLY.\n')
        else console.log('SUCCESSFULLY Changed Folder Permission.')
        console.log('DIST FOLDER: ', distFolder)
    })
}catch(ex){
    console.log(ex)
}