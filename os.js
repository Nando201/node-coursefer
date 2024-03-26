const os = require('os')

console.log(os.userInfo())
console.log(os.uptime())
console.log(os.platform())
console.log(os.freemem())

console.table({
    os: os.userInfo().username,
    version: os.release(),
    freememory: os.freemem()
})