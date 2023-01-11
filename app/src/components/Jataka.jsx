

import React from 'react';
import VideoPlayer from 'react-video-player-extended';
import { useEffect, useState } from 'react';


   

export default function Jataka({id, title,content,moral, total, videoUrl,handleNext, handlePrevious})
{
    
    const [isPlaying, setisPlaying] = useState(false)
    const [volume, setVolume] = useState(0.7)

    const handlePlay = ()=>{
        setisPlaying(true)

    }

    const handlePause = ()=>{
        setisPlaying(false)
    }

    const handleVolume = v =>{
        setVolume(v)

    }
    const handlerNext= ()=>{
        handleNext()
    }
    const handlerPrevious = ()=>{
        handlePrevious()
    }
    return (
        <>
            <div class="narrowcolumn">
                            <div class="posts-wrapper">
                                <div class="posts">
                                    <h2><a href="http://all-free-download.com/free-website-templates/">{title}</a></h2>
                                    <div class="postinfo">
                                        <ul>
                                            <li class="author">by admin</li>
                                            <li class="date">{id}</li>
                                            
                                        </ul>
                                    </div>
                                    <div class="clear">

                                    </div>
                                    <VideoPlayer
                                        url= {videoUrl}
                                        isPlaying={isPlaying}
                                        volume={volume}
                                        onPlay={()=>{handlePlay()}}
                                        onPause={()=>{handlePause()}}
                                        onVolume={(v)=>{handleVolume(v)}}
                                        width="100%" height="152" align="center"
                                    />
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    <h2>Story</h2>
                                        <div class="entry">
                                            
                                            {content.split('\n')
                                            .map(e => <p>{e}</p>)}
                                            
                                        </div>
                                    <h2>Moral of the Story</h2>
                                    <div class="entry">
                                            <p>
                                                {moral.split('\n')
                                            .map(e => <p>{e}</p>)}
                                            </p>                                            
                                    </div>
                                    <div class="clear"></div>
                                    <div class="entry">       
                                    </div>

                                    
                                    <div class="clear">

                                    </div>
                                    
                                </div>
                            </div>
                        {console.log(total)}
                        {console.log(id)}
                        
                        {
                            id>1 &&
                            <div class="browse"><button class = "button-navigate" onClick={()=>{handlerPrevious()}}>&laquo; Previous Page </button></div>}

                        {
                            id<total &&
                            <div class="browse"><button class = "button-navigate" onClick={()=>{handlerNext()}}>Next Page &raquo;</button></div>}

                        </div>
        
        </>
)}
