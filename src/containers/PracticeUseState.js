import React, { useState } from "react";

const PracticeUseState = () => {
  const [color, setColor] = useState("");
  const array = ["black", "green", "red"];
  const [first, second, third] = array;
  return (
    <div>
      <h5 style={{ color: first }} onClick={e => setColor("black")}>
        REAL 컬러
      </h5>
      <h5 style={{ color: third }} onClick={e => setColor("red")}>
        REAL 컬러
      </h5>
      <h5 style={{ color: second }} onClick={e => setColor("blue")}>
        REAL 컬러
      </h5>
      <h5 style={{ color: color }} onClick={e => setColor("green")}>
        REAL 컬러
      </h5>
    </div>
  );
};

export default PracticeUseState;
