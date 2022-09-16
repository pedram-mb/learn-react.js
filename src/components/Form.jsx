const Form = ()=>{

    const HandleChange = (value)=>{
        console.log(value);
    }

    return(
        <div>
            <input onChange={(e)=> HandleChange(e.target.value)} type="text" />
        </div>
    )
}
export default Form