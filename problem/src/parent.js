import { fork  } from 'child_process'
import { fileURLToPath } from 'url'
import { dirname } from 'path'
const currentDir = dirname(fileURLToPath(import.meta.url))
const childProcessFile = `${currentDir}/child.js`

const cp = fork(childProcessFile)
cp.on('message', msg => console.log('msg', msg))

// never sends in time
cp.send('Hello World')

// works!
// setTimeout(() => {
//     cp.send('Hello World')
// }, 200);