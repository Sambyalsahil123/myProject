import React from "react";
import sdata from "./Sdata";
import Card from "./Cards";

const Amazon = () => {
  return (
    <Card
      key={sdata[6].id}
      img={sdata[6].img}
      title={sdata[6].title}
      seriesName={sdata[6].seriesName}
      link={sdata[6].link}
    />
  );
};
export default Amazon;
