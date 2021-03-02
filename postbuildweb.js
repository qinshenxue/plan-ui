const package = require('./package.json')
const fs = require('fs')

const versions = package.version.split('.')

versions[1] = versions[1] - 0 + 1

const newVersion = versions.join('.')

package.version = newVersion
fs.writeFileSync('package.json', JSON.stringify(package, null, 4))
