const os = require('os')

// info about current user
const User = os.userInfo()
// method retursn the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

console.log(User)

const CurrentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(CurrentOS)