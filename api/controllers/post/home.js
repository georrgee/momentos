module.exports = async function(req, res) {
    
    sails.log.warn("Show the post creation form now")

    //await Post.destroy({}) // destroys everything in the POST table. Be careful when you use this 

    const userId = req.session.userId // current user

    const allPosts = await Post.find({user: userId})
    .populate('user')
    .sort('createdAt DESC')

    //return res.send(allPosts)

    res.view('pages/post/home', {
        allPosts
    })
}

// STOPPED AT 7. SET UP MONGODB DATASTORE AND DEBUGGING
// YOU ARE NOW AT REGISTER AND LOGIN (4-18-2020)