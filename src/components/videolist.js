import React from "react"
import Videoitem from "./videoitem"


const Videolist=({videos,onVideoSelect})=>{
        const video=videos.map((vid)=>{
            
               return(
                   <Videoitem key={vid.id.videoId} video={vid} onVideoSelect={onVideoSelect}/>
               )
           })
        return(
        <div className="ui divided relaxed list">
        {video}
        </div>
        )
    }


export default Videolist