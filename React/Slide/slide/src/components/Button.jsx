import { useState } from "react"

export function Button({color}){
    // const [back, isBack] = useState(color)
    var backy = color ?? 'red'
    console.log("In the component Button " +backy);
    
    return(
        <button style={{background:backy, color:"#fff"}}>
            ¡Click Me!
        </button>
    )
}