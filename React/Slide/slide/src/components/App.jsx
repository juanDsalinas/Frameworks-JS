import { useState } from 'react'
import '../assets/css/app.css'

export function App({color}){
    const [back, isBack] = useState('#fff')

    const handleColor = () => {
        isBack(!back)
        // console.log('The new Color is :'+color);
        // console.log('the index is: ' + index + 'The color is: '+color);
        {
            color.map((index,usersolito)=>{
                console.log('The Content is '+usersolito);
            })
        }
    }

    return(
        <div>
            <div className="dos">
                <a href="#" onClick={handleColor} className="dos-uno"></a>
                <a href="#" onClick={handleColor} className="dos-dos"></a>
            </div>
        </div>
    )
}