

import React from 'react';
import VideoPlayer from 'react-video-player-extended';
import { useEffect, useState } from 'react';


   

export default function Mudhras({id, title, content, url, handleNext, handlePrevious, total})
{
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
                                {
                                    
                                    id == -1 &&
                                    <>
                                        <img style={{alignContent:"center",margin: "auto", display:"flex", width:"90%"}} src="../../images/buddha-meditation.gif"/>
                                        <h2><a >What are Mudhras?</a></h2>
                                            <div class="postinfo">
                                                <ul>
                                                    <li class="author">by admin</li>
                                                    <li class="date">id</li>
                                                    
                                                </ul>
                                            </div>
                                           
                                            <div class="entry">
                                                <h3>
                                                    Let's learn the mudhras!

                                                </h3>
                                                <p>
                                                    Mudras are a non-verbal mode of communication and
                                                    self-expression, consisting of hand gestures and fingerpostures. They are symbolic sign based finger patterns
                                                    taking the place, but retaining the efficacy of the spoken
                                                    word, and are used to evoke in the mind ideas
                                                    symbolizing divine powers or the deities themselves. The
                                                    composition of a mudra is based on certain movements of
                                                    the fingers; in other words, they constitute a highly
                                                    stylized form of gestureal communication. It is an
                                                    external expression of 'inner resolve', suggesting that
                                                    such non-verbal communications are more powerful than
                                                    the spoken word.
                                                </p>
                                            

                                        </div>
                                    </>


                                }
                                
                                
                                    
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    <div class="clear"></div>
                                    
                                {
                                    
                                    id> -1 &&
                                    <>
                                    
                                        <h2 ><a >{title}</a></h2>
                                        <div class="clear"></div>
                                        <div class="entry"></div>
                                        <div class="clear"></div>
                                        <div class="clear"></div>
                                        <div class="entry"></div>
                                        <div class="clear"></div>
                                        <img style={{alignContent:"center",margin: "auto", display:"flex", width:"100%", height:"60%"}} src={url}/>
                                        <div class="postinfo">
                                            <ul>
                                                <li class="author">by admin</li>
                                                <li class="date">{id}</li>
                                                
                                            </ul>
                                        </div>

                                        <h2>Significance and Style</h2>
                                            <div class="entry">
                                                <p>
                                            {content.split('\n')
                                            .map(e => <p>{e}</p>)}
                                                </p>
                                            </div>
                                        
                                        <div class="clear"></div>
                                        <div class="entry"></div>
                                        <div class="clear"></div>
                                    </>
                                }
                                {
                            id>-1 &&
                            <div class="browse"><button class = "button-navigate" onClick={()=>{handlerPrevious()}}>&laquo; Previous Page </button></div>}

                        {
                            id<total-1  &&
                            <div class="browse"><button class = "button-navigate" onClick={()=>{handlerNext()}}>Next Page &raquo;</button></div>}

                        
                                    
                                </div>

                                
                                </div>
                        
                        
                       
                            </div>
        
        </>
)}
