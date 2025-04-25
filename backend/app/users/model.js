import User from '../../../DB/schemas/User.js'

export async function add(email, name, password) {
    try
    {
        const user = await User.create({email, name, password});
        console.log(user)
        // If you try to insert a duplicate, Mongoose will throw an error
        await user.save();
        return true;
    }
    catch(er)
    {
        console.log(er);
        return false;
    }
    
}

export async function getByName(name) {
    return User.findOne({name:name}); //promise.resolve(User || null)
}