// finalize the contract
// knowing input and output of the hook
import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatus,setOnlineStatus] = useState(true)
    
    // to render status only once
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[])

    // boolean value
    return onlineStatus;
}

export default useOnlineStatus;