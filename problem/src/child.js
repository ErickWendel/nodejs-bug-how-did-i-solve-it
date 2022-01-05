process.on('message', msg => console.log('message received on child!', msg))
process.send('ready')