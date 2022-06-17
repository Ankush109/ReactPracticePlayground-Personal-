import React,{useEffect, useReducer}from 'react'
import axios from "axios"

const initialstate ={
    loading:true,
    error:"",
    post:{}
}
const reducer =(state,action)=>{
    switch(action.type)
    {
        case"fetch_success":
        return {
            loading:false,
            post:action.payload,
            error:""
        }

       case "fetch_error":
        return {
            loading:false,
            post:{},
            error:"something went wrong"
        }
      default:
        return state
    }
}
function Datafetching2() {
   const [state,dispatch]= useReducer(reducer,initialstate)

   
   useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts/1")
        .then(res => {
         dispatch({type:"fetch_success",payload:res.data})
        })
        .catch(error => {
            dispatch({type:"fetch_error"})
        })
}, [])
  return (
    <div>{state.loading ? "loading" : state.post.title}
    {state.error ? state.error : null}
</div>
  )
}

export default Datafetching2