import React from "react";
import "../styles/global.css";
import { isEmpty } from "ramda";

const DetailsModal = ({ modal, setModal }) => {
  const { name, description, players, pathname } = modal;
  return (
    <div className={"modal__background"}>
      <div className={"modal"}>
        <img
          src={`.${pathname}.svg`}
          alt={"image"}
          className={"modal__image"}
        />
        <div className={"modal__content"}>
          <p className={"modal__title"}>Name:</p>
          <p className={"modal__text"}>{name}</p>
          <p className={"modal__title"}>Description:</p>
          <p className={"modal__text"}>{description}</p>
          <p className={"modal__title"}>{!isEmpty(players) && "Players:"}</p>
          <ul className={"modal__list"}>
            {!isEmpty(players) &&
              players.map((player) => (
                <li className={"modal__text"} key={player}>
                  {player}
                </li>
              ))}
          </ul>
        </div>
        <button className={"modal__close"} onClick={() => setModal()}>
          X
        </button>
      </div>
    </div>
  );
};

export default DetailsModal;
