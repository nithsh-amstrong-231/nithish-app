import React from "react";
import NavBarConst from "./WebApplication/NavBarConst";
import FooterConst from "./WebApplication/FooterConst";
function App(){
    return(
      <div>
        {<NavBarConst/>}
        {<FooterConst/>}
      </div> 
    )
}

export default App;