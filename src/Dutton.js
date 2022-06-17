import React from 'react'
import { useQuery } from "react-query"
function Dutton() {
    const { data, error } = useQuery("hello-world", () => { // 2nd arg is a function which should return a promise
        return new Promise(res => {
            setTimeout(() => {
                res(Math.random())
            }, 2000);
        })
    })
    console.log({data,error})
    return <button>i am a button {data}</button>
}

export default Dutton