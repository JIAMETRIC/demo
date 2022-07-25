import {useState} from "react";

function First() {
    const [var1, setVar1] = useState(1);
    return (
        <div>
            <h1>{var1}</h1>
            <button onClick={() =>  setVar1(var1 + 1)}>Click Here</button>
        </div>
    );
}

export default First;