import Post from "../../../DB/schemas/Post.js";

export async function add(user, payload){
    const date = Date.now(); //! Date type and format
    console.log(date)

    try{    
        const post = await Post.create({ user, title: payload.title, postBody: payload.postBody, image: payload.image, DateAdded:date});
        await post.save();
        return true;
    }
    catch(er)
    {
        console.log(er);
        return false;
    }
}

export async function getAll(){
    try{
        const posts = await Post.find();
        // console.log(posts);
        
        return posts;
    }
    catch(e){
        console.error(e);
        return null;
    }
}

export async function update(id, updated) {
    try {
        await Post.findByIdAndUpdate({ _id: id }, updated, {new:true});
        return true;
    }
    catch (er) {
        console.log(er);
        return false;
    }
}

export async function deleteModel(id) {
    try {
        await Post.deleteOne({ _id: id });
        return true;
    }
    catch (er) {
        console.log(er);
        return false;
    }
}