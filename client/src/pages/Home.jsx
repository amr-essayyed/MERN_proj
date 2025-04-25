import React from 'react'
import { useAuth } from '../hooks/useAuth'
import { Navigate, NavLink, useNavigate } from 'react-router';
import usePosts from '../hooks/usePosts';

export default function Home() {
  const {authenticate} = useAuth();

  if(!authenticate()){
    return <Navigate to="/login" replace />;
  }

  const {posts, hndlDeletePost} = usePosts();
  const navigete = useNavigate();

  return (
    <main className="mt-20">
      {posts.map((post)=> 
      // post 
        <div key={post._id} className="w-[56rem] border-blue-900 mt-5 mb-5 border-3 rounded-xl  ml-auto mr-auto bg-white  subpixel-antialiased shadow-[10px_10px_0px_black]">
          {/* tile */}
          <div className="p-2 font-bold text-xl">{post.title}</div>
          <hr className="w-[98%] m-auto opacity-40 " />
          {/* imaeg */}
          {/* <div><img src={post.image || fallbackImage} alt="post imaeg" className="w-full " /></div> */}
          <div>{post.image && <img src={post.image} alt="post imaeg" className="w-full " />}</div>
          {/* body */}
          <div className="p-2 text-[1.1rem]">{post.postBody}</div>
          {/* user */}
          <div className="p-2 text-sm text-blue-400"> by: {post.user} </div>
          
          {/* controls */}
          { post.user===localStorage.user?
          <div className="p-2 flex justify-end gap-3">
            <div className="tooltip">
              <div className="tooltip-content">
                <div className=" text-white font-black">Edit</div>
              </div>
            <button className="inline-block cursor-pointer hover:text-black" onClick={()=>navigete('/editpost/'+post._id, {state:{post:post}})}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
              </svg>
            </button>
            </div>
            <div className="tooltip">
              <div className="tooltip-content">
                <div className=" text-white font-black">delete</div>
              </div>
            <button className="inline-block cursor-pointer hover:text-red-600 " onClick={()=>hndlDeletePost(post._id,post.user)}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>
            </button>
            </div>
          </div>
          :""}
          </div>
      )}
      <NavLink to="/addpost">
        <button className="flex flex-col-reverse items-center w-15 h-20 fixed bottom-0 right-96 border-1 rounded-t-xl p-2 bg-blue-900 text-white shadow-[5px_5px_0px_black] hover:shadow-[8px_8px_4px_black] hover:-translate-0.5 duration-300 ease-in-out cursor-pointer active:bg-white active:text-black">
          Post 
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 7.5h-.75A2.25 2.25 0 0 0 4.5 9.75v7.5a2.25 2.25 0 0 0 2.25 2.25h7.5a2.25 2.25 0 0 0 2.25-2.25v-7.5a2.25 2.25 0 0 0-2.25-2.25h-.75m0-3-3-3m0 0-3 3m3-3v11.25m6-2.25h.75a2.25 2.25 0 0 1 2.25 2.25v7.5a2.25 2.25 0 0 1-2.25 2.25h-7.5a2.25 2.25 0 0 1-2.25-2.25v-.75" />
          </svg>
        </button>
      </NavLink>
    </main>
  )
}

