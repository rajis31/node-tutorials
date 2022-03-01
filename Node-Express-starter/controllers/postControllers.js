const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try{
      let [posts,_] = await Post.findAll();
      return res.status(200).json(posts);
  } catch(err){
    console.log(err);
    next(err);
  }
}

exports.createNewPost = async (req, res, next) => {
    try{
        let {title,body} = req.body;
        let post = new Post(title,body);
        post = await post.save();
        return res.status(200).json({"message":"Successfully created post"});
    }catch(err){
        console.log(err);
        next(err);
    }
}

exports.getPostById = async (req, res, next) => {
    try{
        let postId = req.params.id;
        let [post,_] = await Post.findByID(postId);
        return res.status(200).json(post);
    } catch(err){
      console.log(err);
      next(err);
    }
}