import { useState,useEffect } from "react";

export default function useFetch(url) {

   const [data,setData] = useState(null)
   const [isPending,setIsPending] = useState(false)
   const [error,setError] = useState(null)

   useEffect(() => {
        const fetchData = async () => {
            setIsPending(true)
            try{
                const response = await fetch(url)
                if(!response.ok){
                    throw new Error("data not found")
                }
                const json = await response.json()
                setData(json)
                setError(null)
                setIsPending(false)
            } catch(err){
                setError('Wrong Url')
                setIsPending(false)
            }
        } 

        fetchData()
   },[url])

   return {data,isPending,error}
}
