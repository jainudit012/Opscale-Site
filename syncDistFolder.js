const fs = require('fs');

const distFolder = './dist'
const cssDest = `${distFolder}/css`
const assetsDest = `${distFolder}/assets`
const scriptsDest = `${distFolder}/scripts`

if (!fs.existsSync(distFolder)) fs.mkdirSync(distFolder);
if (!fs.existsSync(assetsDest)) fs.mkdirSync(assetsDest);
if (!fs.existsSync(cssDest)) fs.mkdirSync(cssDest);
if (!fs.existsSync(scriptsDest)) fs.mkdirSync(scriptsDest);
