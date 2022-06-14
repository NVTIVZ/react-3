import React from "react";
import "../styles/global.css";

const Card = ({ name, description, setModal, players, pathname }) => {
  return (
    <div className="grid__item">
      <div className="card">
        <img
          src={`.${pathname}.svg`}
          alt={"avatar"}
          className={"card__image"}
        />
        <div className="card__content">
          <p className="card__title">{name}</p>
          <p className="card__description">{description}</p>
          <button
            className="button"
            onClick={() => setModal({ name, description, players, pathname })}
          >
            Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
