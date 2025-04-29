import {add, getByName} from './model.js'
import bcrypt from 'bcrypt';


export async function addUser (req, res) {
    console.log("adding a user")
    console.log(req.body.name);
    
    const hash = await bcrypt.hash(req.body.password, 10);
    const added = await add(req.body.email, req.body.name, hash);

    if(added){
        return res.status(201).json({msg: "user Added Successfully"})
        // res.status(201).redirect('/login/')
    }else{
        res.status(400).json({msg: "error adding user"})
    }
}
export async function getUsers (req, res) {

}
export async function deleteUser (req, res) {

}
export async function updateUsers (req, res) {

}