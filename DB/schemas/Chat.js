import mongoose from 'mongoose';

const chatSchema = new mongoose.Schema(
    {
        sender: String,
        receiver: String,
        message: String
    }
);

const Chat = mongoose.model('Chat', chatSchema);

export default Chat;