module.exports = async function(req, res) {
    const postBody = req.body.postBody

    console.log("Create post object with text:" + postBody)

    // Waterline creation syntax
    const userId = req.session.userId
    await Post.create({text: postBody, user: userId}).fetch() // "Promise Object"

    res.redirect('/post')

}