import { add, getAll, update, deleteModel } from "./model.js";
import { isLoggedIn } from "../utility/auth.js";

export async function addPost(req, res){
    // console.log("adding a post: ", req.body, req.file);

    if(req.file != undefined){
        req.body.image = 'assets/images/'+ req.file.filename;
    }
    
    const added = await add(req.username, req.body);
    if(added){
        res.status(201).send({msg:"post added successfully"});
    }else{
        res.status(400).send("something went wrong");
    }
}

export async function getPosts(req, res){
    console.log("getting posts route");
    const posts = await getAll();
    
    if(posts){
        const loginData = isLoggedIn(req);
        if(loginData !== null){
            // res.render('../views/posts.ejs', {name:loginData.name, posts: posts});
            res.send(posts);
        }else{
            // res.render('../views/posts.ejs', {name: null, posts: posts});
            res.send(posts);
        }
    }else{
        res.status(404).send({error:"there is no posts"});
    }
    
}

export async function updatePost(req, res){
    const id = req.params.id;
    // console.log("updating a post: ", req.body, req.file);

    if (req.file != undefined) {
        req.body.image = 'assets/images/' + req.file.filename;
    }
    
    const updated = await update(id, req.body);
    if (updated) {
        res.status(200).send({ msg: "post updated successfully" });
    } else {
        res.status(400).send({ error: "something went wrong" });
    }
}

export async function deletePost(req, res){
    const id = req.params.id;
    console.log("deleting a post: ", req.body.postBody);

    const deleted = await deleteModel(id);

    if (deleted) {
        res.status(200).send({ msg: "post deleted successfully" });
    } else {
        res.status(400).send({ error: "something went wrong" });
    }
}