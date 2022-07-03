const yargs = require('yargs')
const users = require('./users')


yargs.command({
    command: 'add',
    describe: 'enter your username',
    demandOption: true,
    builder: {
        username: {
            command: 'add',
            describe: 'enter your username',
        },
        password: {
            command: 'add',
            describe: 'enter your password',
        },
    },
    handler: (argv)=> {
     users.adminUsers(argv.username, argv.password)
    }
})

yargs.command({
    command: 'remove',
    describe: 'remove user',
    demandOption: true,
    builder: {
        username: {
            command: 'remove',
            describe: 'remove a user',
        },
    },
    handler: (argv)=> {
     users.removeUsers(argv.username)
    }
})

yargs.command({
    command: 'list',
    describe: 'get a list of all users',
    demandOption: true,
    handler: (argv)=> {
     users.listUsers(argv)
    }
})

yargs.command({
    command: 'read',
    describe: 'read user',
    demandOption: true,
    builder: {
        username: {
            command: 'read',
            describe: 'read individual users',
        },
    },
    handler: (argv)=> {
     users.readUsers(argv.username,argv.password)
    }
})


yargs.parse()