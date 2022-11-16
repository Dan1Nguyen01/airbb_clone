import React from "react";
export default function Card(props) {
  let badgeText;

  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location == "Online") {
    badgeText = "Online";
  } else {
    badgeText = "";
  }

  return (
    <div className="card">
      <div className="soldout-badge">{badgeText} </div>
      <img src={`../images/${props.coverImg}`} className="card-img" />
      <div className="card--stats">
        <img src="../images/star.png" />
        <span className="gray">{props.reviewCount}</span>
        <span className="gray">(6) • {props.location}</span>
      </div>
      <p className="card-title">{props.title}</p>
      <p className="card-price">
        From ${props.price} <span>/person</span>
      </p>
    </div>
  );
}
