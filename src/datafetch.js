import React from 'react'
import {useEffect,useState} from "react"
import axios from 'axios'
function Datafetch() {
    const[post,setpost]=useState({})
    const[id,setid]=useState(1)
    const[idfrombuttonclick,setidfrombuttonclick] =useState(1)
    const handleclick=()=>{
        setidfrombuttonclick(id)
    }
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idfrombuttonclick}`)
        .then(res => {
            console.log(res);
            setpost(res.data)
        })
        .catch(err=>{
            console.log(err);
        })
    },[idfrombuttonclick])
  return (
    <div>
        <input type="text" value= {id} onChange={e=>setid(e.target.value)}/>
        <button type="button"onClick={handleclick}>fetch post</button>
        <div>
            {post.title}
        </div>
        
        
        
        {/* <ul> */}

            {/* {
                post.map(post=>(
                    <li key={post.id}>{post.title}</li>
                ))
            }  */}
        {/* </ul> */}
    </div>
  )
}

export default Datafetch