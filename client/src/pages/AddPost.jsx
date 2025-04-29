import React from 'react';
import PostForm from '../components/PostForm';
import usePosts from '../hooks/usePosts';
import { NavLink } from 'react-router';

export default function AddPost() {
  const {hndlAddPost, loading, uploading} = usePosts();

  return (
    <div className="mt-50">
      <div className=" flex justify-center pr-50"><NavLink className="btn text-xl font-bold shadow-[5px_5px_0px_black]" to="/">←back</NavLink></div>
      <div className="h-1 text-2xl font-extrabold text-shadow-white text-center p-5 pb-8 m-5">Add Post</div>
      <PostForm hndlSubmit={hndlAddPost} uploading={uploading} />
    </div>
  )
  }
