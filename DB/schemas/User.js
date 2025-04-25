import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.ObjectId;

const userSchema = new mongoose.Schema(
    {
        // _id: ObjectId,
        email: {type: String, required: true, lowercase: true, unique: true},
        name: {type: String, required: true, unique: true},
        password: {type: String, required: true}
    }
);

// a different name for a collection in Mongoose (a collection named User of the type(schema) userSchema)
const User = mongoose.model("User", userSchema);
User.init().then(() => console.log('Indexes ensured')).catch(console.error);

export default User;