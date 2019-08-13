import React, { createContext, useContext } from "react";

const ThemeContext = createContext("red");

const PracticeUseContext = () => {
  const theme = useContext(ThemeContext);
  const style = {
    width: "30px",
    height: "30px",
    backgroundColor: theme
  };
  return <div style={style} />;
};

export default PracticeUseContext;
