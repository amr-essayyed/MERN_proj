import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

export default function usePosts() {
    const [posts, setPosts] = useState([]);
    let navigate = useNavigate();
    let params= useParams();

    useEffect(() => {
        // fetch all posts
        async function getPosts() {
            try {
                const { data: tempposts } = await axios.get('/posts/');
                // console.log(tempposts);
                setPosts(tempposts)

            } catch (e) {
                console.error("🔴", e);
            }
        }
        getPosts();
    }, []);

    // async function hndlAddPost(title, body, imageURL){
    async function hndlAddPost(e){
        console.log("✔️ adding a post");
        e.preventDefault();
        const formData = new FormData(e.target);        
                
        try{
            // const { data:resMsg } = await axios.post('/posts', { title:title, postBody:body, image:imageURL})
            const { data: resMsg } = await axios.post('/posts', formData)
            console.log(resMsg);
            navigate("/")

            const { data: tempposts } = await axios.get('/posts/');
            console.log(tempposts);
            setPosts(tempposts)
        } catch (e) {
            console.error("🔴", e);
        }
    }

    async function hndlDeletePost(id, user) {
        console.log("🟡handled");
        try{
            const { data: resMsg } = await axios.delete('/posts/'+id);
            console.log(resMsg);
            const { data: tempposts } = await axios.get('/posts/');
            // console.log(tempposts);
            setPosts(tempposts)

        } catch (e) {
            console.error("🔴", e);
        }
        // DELETE /posts/id
    }

    async function hndlEditPost(e) {
        console.log("✔️ editing a post");
        e.preventDefault();
        const id = params.id;
        console.log(id);
        
        const formData = new FormData(e.target); 

        try {
            // const { data: resMsg } = await axios.put('/posts/'+post.id, { title, postBody: body, image:imageURL })
            const { data: resMsg } = await axios.put('/posts/' + id, formData);
            console.log(resMsg);
            navigate("/");

            const { data: tempposts } = await axios.get('/posts/');
            console.log(tempposts);
            setPosts(tempposts)

        } catch (e) {
            console.error("🔴", e);
        }

    }


    return {posts, hndlDeletePost, hndlEditPost, hndlAddPost};
}
