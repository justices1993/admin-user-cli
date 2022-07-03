const fs = require('fs')

//Store admin username and password
const adminUsers  = (username,password)=> {
    const users = loadUsers()
    //prevent duplicate username
    const duplicateUsers = users.find((user)=> user.username === username)

    if(!duplicateUsers){
        users.push({
            username: username,
            password: password
        })
        savedUsers(users)
        console.log('User created successfully')
    }else {
        console.log('user exists')
    }
}

//Remove existing users from the CLI application
const removeUsers = (username)=> {
    const users = loadUsers()
    //check if user exist != a message will indicate that the user does not exist
    const ifUserExist = users.filter((user)=> user.username !==  username)

    if(users.length > ifUserExist.length){
        savedUsers(ifUserExist)
        console.log('user has been removed from the app')
    }else {
        console.log('user does not exist')
    }
}

//load all users
const listUsers = ()=> {
    const users =  loadUsers()
    users.forEach(user => {
        console.log('Username:' + user.username + ' password:'  + user.password)
    });
}

const readUsers = (username)=> {
    const users = loadUsers()
    const finUser = users.find((user)=> user.username === username)

    if(finUser){
        console.log('username: ', finUser.username)
        console.log('password: ', finUser.password)
    }else {
        console.log('user not found')
    }
}


//load existing users on the CLI application
const loadUsers = ()=> {
    try{
        const dataBuffer = fs.readFileSync('users.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
    }
}

//Load new users and store them on the JSON data
const savedUsers = (users)=> {
    const dataJSON = JSON.stringify(users)
    fs.writeFileSync('users.json', dataJSON)
}

module.exports = {
    adminUsers: adminUsers,
    removeUsers: removeUsers,
    listUsers: listUsers,
    readUsers: readUsers
}