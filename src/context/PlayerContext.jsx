import { createContext, useRef , useState , useEffect } from "react";
import {songsData} from "../assets/frontend-assets/assets"
export const PlayerContext = createContext() ;
const PlayerContextProvider = ({children})=>{
    const audioRef = useRef() ;
    const seekbg = useRef() ;
    const seekbar = useRef() ;
    const [track , settrack] = useState(songsData[0]) ;
    const [playstate , setplaystate] = useState(false)
    const [songavail , setsongavail] = useState(false)
    const [time , settime] = useState({
        currenttime : {
            minutes : 0 , 
            seconds : 0
        } , 
        totaltime : {
            minutes : 0 ,
            seconds : 0 
        }
    }) 
    const play = ()=>{
        audioRef.current.play() ;
        setplaystate(true)
        setsongavail(true)
    }
    const pause = ()=>{
        audioRef.current.pause() ;
        setplaystate(false)
        setsongavail(false)
    }
    const playwithId = async (id)=>{
        await settrack(songsData[id]) ;
        await audioRef.current.play() ;
        setplaystate(true)
        setsongavail(true)
    }

    useEffect(() => {
        audioRef.current.ontimeupdate = ()=>{
            seekbar.current.style.width = (Math.floor(audioRef.current.currentTime / audioRef.current.duration * 100)) + "%" ;
            settime(
                {
                    currenttime : {
                        seconds : songavail ? Math.floor(audioRef.current.currentTime % 60) : 0 ,
                        minutes : songavail ? Math.floor(audioRef.current.currentTime / 60) : 0
                    } ,
                    totaltime :{
                        minutes :  songavail ? Math.floor(audioRef.current.duration / 60) : 0 ,
                        seconds :  songavail ? Math.floor(audioRef.current.duration % 60) : 0
                    }
                }
            )
        }
    
      
    }, [audioRef.current])
    

    const contextValue = {
        audioRef ,
        seekbg , 
        seekbar,
        track,
        settrack ,
        playstate ,
        setplaystate ,
        time ,
        settime , 
        play , pause ,
        playwithId
    }
    return(
        < >
        <PlayerContext.Provider value={contextValue}>
            {children}
        </PlayerContext.Provider>
        </>
    )
}

export default PlayerContextProvider ;