import React from 'react';
import PostForm from '../components/PostForm';
import usePosts from '../hooks/usePosts';

export default function AddPost() {
  const {hndlAddPost} = usePosts();

  return (
    <div className="mt-50">
      <div className="h-1 text-2xl text-center p-5 pb-8 m-5">Add Post</div>
      <PostForm hndlSubmit={hndlAddPost} />
    </div>
  )
  }
