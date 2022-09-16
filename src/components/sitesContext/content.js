import React, { useContext, useReducer } from "react";
import "./sidebar.css";
import "./content.css";
import { showContext } from "../../App";

const inialState = 0;
const reducer = (state , action)=>{
    switch (action) {
        case 'increment':
            return state + 1
        case 'decriment':
            return state - 1
        case 'reset' : 
            return inialState
        default:
            return state
    }
}

const Content = () => {

    // useReducer
    const [conut , dispatch] = useReducer(reducer , inialState)

    // context
  const { showMenu, setShowMenu } = useContext(showContext);

  const HandleShowMneu = (e) => {
    e.stopPropagation();
    setShowMenu(!showMenu);
    // console.log(showMenu);
  };

  return (
    <div className="content">
      <div onClick={() => { setShowMenu(false); }} >
        <div onClick={HandleShowMneu} className="show p-4">
          <i className="fa-solid fa-bars"></i>
        </div>

        <div>
          {/* useReducer */}
          <h2>{conut}</h2>
          <button onClick={()=>{dispatch('increment')}} className="btn btn-primary">increment</button>
          <button onClick={()=>{dispatch('decriment')}} className="btn btn-info">decriment</button>
          <button onClick={()=>{dispatch('reset')}} className="btn btn-danger">reset</button>
        </div>

      </div>
    </div>
  );
};
export default Content;
