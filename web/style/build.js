const fs = require('fs')

const files = fs.readdirSync('./')
console.log(files)

const output = [`@import '_var.less';`]
files.forEach((file) => {
    if (
        file.indexOf('_var.less') === -1 &&
        file.indexOf('style.less') === -1 &&
        file.indexOf('.less') > -1
    ) {
        output.push(`@import '${file}';`)
    }
})

const str = output.join('\n')

fs.writeFileSync('./style.less', str)

process.exit()
