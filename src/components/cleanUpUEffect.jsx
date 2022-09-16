import React, { useEffect, useState } from "react";

const CleanUpUEffect = ()=>{

    const [size , setSize] = useState(window.innerWidth);
    const [height , setHeight] = useState(window.innerHeight)

    const checkSize = ()=>{
        setSize(window.innerWidth)
    }
    const checkHeight = ()=>{
        setHeight(window.innerHeight)
    }

    useEffect(() => {
        window.addEventListener('resize' , checkSize)
        window.addEventListener('resize' , checkHeight)
    }, []);

    return(
        <div>
            <h2>
                width : {size} px
            </h2>
            <h2>
                height : {height} px
            </h2>
        </div>
    )
}
export default CleanUpUEffect;