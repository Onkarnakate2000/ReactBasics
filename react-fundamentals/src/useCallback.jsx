import { memo, useCallback, useState } from "react";

function UseCallbackfunction() {
    const [counter, setCounter] = useState(0);

    const countHandler = () => {
        setCounter(counter + 1);
    };

    // function a(){
    //     console.log("hi i am in a render");
    // }
    const a = useCallback(function(){
        console.log("Hi am in callback")
    },[])

    return (
        <>
            <button onClick={countHandler}>Counter - {counter}</button>
            <Demo a={a} />
        </>
    );
}

const Demo = memo(function ({ a }) {
    console.log("rendered in fuction demo");
    return (
        <>
            <p>Hi, I am in demo. {a()}</p>
        </>
    );
});

export default UseCallbackfunction;
