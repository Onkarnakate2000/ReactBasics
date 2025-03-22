import React, { use, useEffect, useState,useMemo } from "react";
import axios, { formToJSON } from "axios";

function UseMemoApproach() {
    const[count,setCount]=useState(0);
    const[inputValue,setInputValue] = useState(1);
    const[finalValue,setfinalValue] = useState(0)

    function countHandler(){
        setCount(count+1);
    }

    // let sumInputvalue = useMemo(()=>{ 
    //     console.log("I am in memo")
    //     let counter=0;
    //     for(let i=1; i<inputValue; i++){
    //     counter = counter + i;
    //     }
    //     return counter;
    // },[inputValue])

    useEffect(()=>{
        console.log("I am in useEffect instead of useMemo");
        let counter = 0;
        for(let i=0;i<inputValue;i++){
            counter =counter + i;
        }
        setfinalValue(counter);
    },[inputValue])

    return(
        <>
        <button onClick={countHandler}>counter-{count}</button>
        <input style={{padding:"10px", margin:"10px"}} onChange={(e)=>setInputValue(e.target.value)}></input>
        sum of {inputValue} = {finalValue}
        </>
    )
}

export default UseMemoApproach;
