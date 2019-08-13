import React, { useState } from "react";
import PracticeUseEffect from "../containers/PracticeUseEffect";
import PracticeUseContext from "../containers/PracticeUseContext";

const Visable = () => {
  const [visable, setVisable] = useState(false);
  return (
    <div>
      <button onClick={e => setVisable(!visable)}>
        {visable ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visable ? (
        <>
          <PracticeUseEffect />
          <PracticeUseContext />
        </>
      ) : null}
    </div>
  );
};

export default Visable;
