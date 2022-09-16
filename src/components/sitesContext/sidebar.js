import React, { useContext } from "react";
import { showContext } from "../../App";

const Sidebar = ()=>{

    const {showMenu , setShowMenu} = useContext(showContext)

    return(
        <div style={showMenu ? {right : 0} : {}} className="sidebar">

        </div>
    )
}
export default Sidebar;