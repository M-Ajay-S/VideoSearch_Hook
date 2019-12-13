import  {  useEffect, useState } from 'react'
import Searchbar from './Searchbar'

import Videolist from './videolist'
import VideoDetail from './videodetail'
import useVideos from './hooks/usevideos'

const App=()=>{
    
    var [videoSelected,setVideoSelected]=useState(null)
    var [videos,doSubmit]=useVideos('buildings')
    //
   useEffect(()=>{
    setVideoSelected(videos[0])
   },[videos])
    
        return (<div>
            <Searchbar doSubmit={doSubmit}/>
            <div className='ui grid'>
                <div className='ui row'>
                    <div className='eleven wide column'>
                        <VideoDetail videoSelected={videoSelected}/>
                    </div>
                    <div className='five wide column'>
                        <Videolist videos={videos} onVideoSelect={setVideoSelected}/>
                    </div>
                </div>
            </div>
        </div>)
    }



export default App