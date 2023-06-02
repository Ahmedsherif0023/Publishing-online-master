import React from "react";
import "./MainContent.css";

const MainContent = ({ pageName }) => {
  return (
    <main>

      <div className="hide-when-mobile main-x">
        This is the   
        {
            " "+ pageName
        }
      </div>
      <div className="show-when-mobile main-y">
        This is the   
        {
            " "+ pageName
        }
      </div>
      
    
    </main>
  );
};

export default MainContent;
