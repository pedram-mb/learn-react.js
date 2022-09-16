import react from "react";
import React, { useState } from "react";
import Content from "./components/sitesContext/content";
import Sidebar from "./components/sitesContext/sidebar";
// import CleanUpUEffect from './components/cleanUpUEffect';
// import GetPost from './components/GetPost';
// import Form from './components/Form';
// import Test from './components/Testprops';
// import TestState from './components/testState';

export const showContext = react.createContext();

const App = () => {
  // let name = "pedram";
  // let age = 22;

  // const HandleClick =(username)=>{
  //   console.log(username);
  // }

  const [showMenu, setShowMenu] = useState(false);


  return (
    <div>
      <div>
        {/* <Test name={name} age={age} HandleClick={HandleClick}>
        <p>
          hello world!
        </p>
      </Test> */}

        {/* <Form /> */}

        {/* <TestState /> */}

        {/* <CleanUpUEffect />

      <GetPost /> */}
      </div>

      <showContext.Provider value={{showMenu , setShowMenu}}>
        <Sidebar />
        <Content />
      </showContext.Provider>
    </div>
  );
};
export default App;
