import React from "react";
import Amazon from "./Amazon";
import Netflix from "./Netflix";

const Favs = "netflix";

const App = () => (
  <>
    <h1 className="heading_style"> List of top 5 Netflix Series in 2022 </h1>
    {/* <Favfun /> */}
    {Favs === "netflix" ? <Netflix /> : <Amazon />}
  </>
);

export default App;
