import React, { useRef } from 'react'

export default function PostForm({_title="", _body="", _iamgeURL="", hndlSubmit, id, user}) {
  const formRef = useRef();  
  // const title = useRef(_title);
    // const body = useRef(_body);
    // const imageURL = useRef(_iamgeURL);

  return (
    <form onSubmit={hndlSubmit} ref={formRef} className="flex flex-col card border-neutral-content border-1 w-80 p-5 gap-5 m-auto mt-5 shadow-[10px_10px_0px_black]">
        <input type="text" name="title" id="title" className="input input-neutral-content bg-sky-100" placeholder="title" defaultValue={_title} />
        <textarea name="postBody" id="body" className="input input-neutral-content bg-sky-100 overflow-x-hidden whitespace-normal" placeholder="type post here" defaultValue={_body}></textarea>
        <input type="file" name="image" id="image" className=" file-input input-neutral-content bg-sky-100" placeholder="uplad an image" />
        <button type="submit" className="btn bg-blue-950 text-white">Post</button>
    </form>
  )
}

// ()=>hndlSubmit(title.current.value, body.current.value, imageURL.current.value, id, user)