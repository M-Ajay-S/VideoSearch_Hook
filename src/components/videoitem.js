import "./videoitem.css"
import React from "react";

const Videoitem=({video,onVideoSelect})=>{

        const {snippet}=video
        return(
            <div className="video-item item" onClick={()=>{onVideoSelect(video)}}>
            <img className="ui image" src={snippet.thumbnails.default.url} alt={snippet.description}/>
            <div className="content">
            <div className="header">
                {snippet.title} 
            </div>
            </div>
            </div>
        )
    }


export default Videoitem