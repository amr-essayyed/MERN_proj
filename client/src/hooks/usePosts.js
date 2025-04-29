import React, {useState ,useEffect} from 'react'
import axios from 'axios';
import { useNavigate, useParams } from 'react-router';

export default function usePosts() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [uploading, setUploading] = useState(false);

    let navigate = useNavigate();
    let params= useParams();

    useEffect(() => {
        // fetch all posts
        async function getPosts() {
            try {
                setLoading(true);
                const { data: tempposts } = await axios.get('/posts/');
                // console.log(tempposts);
                setPosts(tempposts)

            } catch (e) {
                console.error("🔴", e);
            } finally {
                setLoading(false);
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
            setUploading(true);
            const { data: resMsg } = await axios.post('/posts', formData)
            console.log(resMsg);
            navigate("/");
            setUploading(false);

            setLoading(true);
            const { data: tempposts } = await axios.get('/posts/');
            console.log(tempposts);
            setPosts(tempposts)
        } catch (e) {
            console.error("🔴", e);
            
        } finally {
            setUploading(false);
            setLoading(false)
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
            setUploading(true);
            const { data: resMsg } = await axios.put('/posts/' + id, formData);
            console.log(resMsg);
            navigate("/");

            const { data: tempposts } = await axios.get('/posts/');
            console.log(tempposts);
            setPosts(tempposts)

        } catch (e) {
            console.error("🔴", e);
        } finally {
            setUploading(false)
        }

    }


    return {posts, hndlDeletePost, hndlEditPost, hndlAddPost, loading, uploading};
}
