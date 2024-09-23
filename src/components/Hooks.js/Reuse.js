import { useEffect } from "react"

function useText(count){
    useEffect((()=>{
        document.title=count
    }),[count])
}
export {useText}