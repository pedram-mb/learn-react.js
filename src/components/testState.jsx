import react, { useState } from "react"

const TestState = ()=>{
    {/* object in useState */}
    const [name , setName] = useState({name : '' , age : ''})
    {/* array in useState */}
    const [brands , setBrands] = useState(["bmw" , "benz" , "audi" , "sandero"]);
    const [addBrand , setAddBrand] = useState('')
    const handleAddBrands = ()=>{
        setBrands([...brands , addBrand])
    }

    return(
        <div>
            {/* object in useState */}
            <input onChange={(e)=>{setName({...name , name : e.target.value})}} type="text" />
            <input onChange={(e)=>{setName({...name , age : e.target.value})}} type="text" />
            
            <h2>{name.name}</h2>
            <h2>{name.age}</h2>

            {/* array in useState */}
            <input onChange={(e)=>{
                setAddBrand(e.target.value)
            }} type="text" />
            <button onClick={handleAddBrands}>add</button>
            <ul className="ul-list">
                {
                    brands.map(item => (
                        <li>
                            {item}
                        </li>
                    ))
                }
            </ul>

        </div>
    )
}
export default TestState;