import React from 'react'
import PostForm from '../components/PostForm';
import usePosts from '../hooks/usePosts'
import { useLocation } from 'react-router';
import { NavLink } from 'react-router';

export default function EditPost() {
    const {hndlEditPost, loading, uploading}= usePosts();
    const location = useLocation();
    const {post} = location.state;

    return (
        <div className="mt-50">
            <div className=" flex justify-center pr-50"><NavLink className="btn text-xl font-bold shadow-[5px_5px_0px_black]" to="/">←back</NavLink></div>
            <div className="h-1 text-2xl text-center p-5 pb-8 m-5">Edit Post</div>
            <PostForm id={post._id} user={post.user} _title={post.title} _body={post.postBody} _iamgeURL={post.image} hndlSubmit={hndlEditPost} uploading={uploading} />
        </div>
    )
}
