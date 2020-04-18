module.exports = async function(req, res) {

    console.log("Listening out all users now...")

    // fetch all users using WaterLine
    const users = await User.find()

    // silly solution
    // const objs = []
    // users.forEach(user => {
    //     objs.push({id: user.id, fullName: user.fullName, email: user.email, password: user.password})
    // })

    res.send(users)
}

// module.exports = async function(req, res) {
//     console.log("Listing out all users now...")

//     // fetch all users using Waterline
//     const users = await User.find()

//     // silly solution
//     // const objs = []
//     // users.forEach(user => {
//     //     objs.push({id: user.id, 
//     //         fullName: user.fullName, 
//     //         email: user.emailAddress
//     //     })
//     // })

//     res.send(users)

// }