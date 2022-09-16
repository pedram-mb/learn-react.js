const Test = ({name , age , HandleClick , children})=>{
    // console.log(props);
    return(
        <>
            {/* <h1>
                {props.name}
            </h1>
            <h1>
                {props.age}
            </h1> */}
            <h1>
                {name}
            </h1>
            <h1>
                {age}
            </h1>
            <button onClick={()=>{
                HandleClick('mb')
            }}>click here</button>
            {children}
        </>
    )
}
export default Test;