import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.ObjectId;

const postSchema = new mongoose.Schema(
    {
        // _id: ObjectId,
        user: String,
        title:String,
        postBody: {type: String, required: true},
        image:String,
        DateAdded: Date
    }
);

// a different name for a collection in Mongoose (a collection named User of the type(schema) userSchema)
const Post = mongoose.model("Post", postSchema);
Post.init().then(() => console.log('Post Indexes')).catch(console.error);

export default Post;