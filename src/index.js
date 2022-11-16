import React from "react";
import ReactDOM from "react-dom";
import "../src/style.css";
import data from "./data";

import Header from "../src/components/Header.js";
import MainContent from "../src/components/MainContent.js";
import Card from "./components/Card";

function App() {
  const newsdata = data.map((item) => {
    return (
      <Card
        key={data.id}
        {...item}
        // img={data.coverImg}
        // rating={data.stats.rating}
        // reviewCount={data.stats.reviewCount}
        // location={data.location}
        // title={data.title}
        // price={data.price}
        // openSpots={data.openSpots}
      />
    );
  });
  return (
    <nav>
      <Header />
      <MainContent />
      <section className="card-list">{newsdata}</section>
    </nav>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
