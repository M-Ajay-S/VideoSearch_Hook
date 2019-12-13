import { useState,useEffect } from "react";
import youtube from "../../api/youtube";

const useVideos=(defaultSearchTerm)=>{
    var [video,setVideo]=useState([])

    useEffect(()=>{
    doSubmit(defaultSearchTerm)
    },[defaultSearchTerm])
    
    const doSubmit=async (term)=>{
    console.log(term)
   const response= await youtube('/search',{params:{q:term}})
  // console.log(response.data.items)
    setVideo(response.data.items)
    }
    //return {videos,doSubmit} in js
    return [video,doSubmit]

}

export default useVideos