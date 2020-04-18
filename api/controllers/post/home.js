module.exports = async function(req, res) {
    
    sails.log.warn("Show the post creation form now")

    //await Post.destroy({}) // destroys everything in the POST table. Be careful when you use this 

    const userId = req.session.userId // current user

    const allPosts = await Post.find({user: userId}) // loading all POST Objects
    .populate('user')
    .sort('createdAt DESC')

    // return res.send(allPosts)

    res.view('pages/post/home', {
        allPosts
    })
}