import React from "react";

const VideoDetail=({videoSelected})=>{
        if(!videoSelected){
            return(
                <div>Loading...</div>
            )
        }
        const {title,description}=videoSelected.snippet
        return(
            <div>
                <div className="ui embed">
                <iframe title="video player" src={`https://www.youtube.com/embed/${videoSelected.id.videoId}`} ></iframe>
                </div>
                <div className="ui segment">
                <h4 className="ui header">
                {title}
                </h4>
                <p>
                 {description}
                </p>
                </div>
            </div>
        )
    }


export default VideoDetail