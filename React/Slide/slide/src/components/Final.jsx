import { useState } from "react";
import { App } from "./App"
import { Button } from "./Button";

export function Final(){
    const users = [
        {
            username:'A',
            color:'green'
        },
        {
            username:'B',
            color:'yellow'
        },
        {
            username:'B',
            color:'blue'
        }
    ]

    var number = Math.floor(Math.random()*3);
    var userFinal = users[number].color
    console.log('In the component Final '+userFinal);

    const [back, isBack] = useState(userFinal)

    const changeColor = () => {
        userFinal = users[number].color
        isBack(userFinal)
        console.log("Dentro del changeColor "+userFinal);
    }

    return(
        <div onClick={changeColor} style={{backgroundColor:back}}>
            <Button color={back}/>
        </div>
    )
}