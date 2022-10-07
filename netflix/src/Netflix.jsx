import React from "react";
import sdata from "./Sdata";
import Card from "./Cards";

const Netflix = () => {
  return (
    <Card
      key={sdata[1].id}
      img={sdata[1].img}
      title={sdata[1].title}
      seriesName={sdata[1].seriesName}
      link={sdata[1].link}
    />
  );
};
export default Netflix;
