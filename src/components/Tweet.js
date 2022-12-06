import { useLayoutEffect,useRef, useState } from "react";
import DateStamp from "./DateStamp";


const Tweet = ({tweetData,likes,setLikes}) => {

    const containerRef = useRef();

    useLayoutEffect(()=>{
        if(containerRef.current){
            // containerRef.current.children?.current?.classList?.add('blue');
            const count = containerRef.current.children?.length;
            for(let i=0;i<count;i++)
            containerRef.current.children[i]?.classList?.add('blue')           
            //This is neccessary to make multiple span elements change color
        }
    })


    const pre= "<span>"
    const suf ="</span>"

    

    const text = tweetData.tweetText.split(' ')
    const newText = text.map(word=>{
        if(word.includes("#")||word.includes("@"))
            return(
                pre.concat(word).concat(suf)
            )
        else
            return(
                word
            )
       
            
    }).join(' ')
    //^^This inserts span elements wherever a # or @ is encountered in tweetData.tweetText


    const tEmpty = tweetData.tweetImage===''
    const pEmpty = tweetData.profileImage===''

    const profileImageCss = pEmpty ? "https://ia801703.us.archive.org/6/items/twitter-default-pfp/e.png" :  tweetData.profileImage
    const tweetImageCss = tEmpty ? "":"w-full h-full"

    const [like,setLike]= useState(tweetData.stats.likes)
    
  
    

    return(
     
     <div className="tweetCard w-full flex flex-row pt-10 pb-10">
       
        <div className="profilePic w-10 h-10 border rounded-full overflow-hidden border-none">
            <img src={profileImageCss} className="w-full h-full"/>
        </div>
        <div className="flex flex-col profTweet pl-2 md:pl-5 w-[90%]">
            <div className="flex flex-row items-end">
                <div className="profName max-w-[30%] truncate">
                    <b>{tweetData.profileName} </b>
                </div>
                <div className="pl-1 md:pl-2 text-white/50 text-sm md:text-md max-w-[30%] truncate ">
                    @{tweetData.handle}
                
                </div>
                <div className="pl-5">
                    <DateStamp date={tweetData.date}/>
                </div>
            </div>
            <br/>
            <div className="text text-left pt-1 pb-1">
                <div ref={containerRef} dangerouslySetInnerHTML={{__html: newText}}></div>  
                {/* This is where the text with span elements are inserted */}
               {/* { console.log(newText)} */}
            </div>
            <div className="tweetImage min-w-[75%] max-w-full h-auto border rounded-2xl overflow-hidden border-none pt-1">
                <img className={{tweetImageCss}} src ={tweetData.tweetImage}/>
            </div>
            
            
            
            <div className="buttons">
                <div className="flex flex-row text-xs md:text-s text-white/50 justify-between md:pr-32 pt-10">
                    <button className="p-1 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 md:w-5 h-4 md:w-5 ">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z" />
                        </svg>
                        {tweetData.stats.comments}

                    </button>
                    <button className="p-1 flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 md:w-5 h-4 md:w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                        </svg>

                        {tweetData.stats.retweets}

                    </button>
                    <button className={likes.includes(tweetData.index)?"p-1 flex flex-row text-[#F91880]":"p-1 flex flex-row" }
                    onClick={()=>{
                        if(likes.includes(tweetData.index))
                        {let newArray = likes.filter(el=>
                           el!=tweetData.index
                        )
                        console.log(newArray)
                        setLikes(newArray)
                        
                        setLike(like-1)
                        
                        }
                        else
                        {let newArray=likes
                            newArray.push(tweetData.index)
                            setLikes(newArray)
                            console.log(newArray)

                            setLike(like+1)

                        }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke={likes.includes(tweetData.index)?"[#F91880]":"currentColor"} 
                        className={likes.includes(tweetData.index)?"stroke-[#F91880] w-4 md:w-5 h-4 md:w-5":"stroke-currentColor w-4 md:w-5 h-4 md:w-5"}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                       {like}

                    </button>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 md:w-5 h-4 md:w-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5" />
                        </svg>

                    </button>
                </div>

            </div>
        </div>
     </div>   
    )
}

export default Tweet;
