const fs = require('fs')
YAML = require('yamljs');

const readdir = path => {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (error, files) => {
            error ? reject(error) : resolve(files)
        });
    });
}

const readFileAsync = filePath => {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, buffer) => {
            err ? reject(err) : resolve(buffer)
        });
    });
};

const getFileBufferByName = (name, dir) => {
    return readFileAsync(dir + name)
}

const getFilesData = (fileNames, directory) => {
    const allPromises = fileNames.map(fileName => getFileBufferByName(fileName, directory))

    return Promise.all(allPromises).then(filesBuffer => {
        const allData = []
        filesBuffer.forEach(fileBuffer => {
            allData.push(YAML.parse(fileBuffer.toString('utf-8')))
        })
        return new Promise(resolve => {
            resolve(allData)
        })
    })
}

const loadData = async directory => {
    const fileNames = await readdir(directory)
    const fileData = await getFilesData(fileNames, directory)
    return fileData
}

module.exports = {
    loadData
}
