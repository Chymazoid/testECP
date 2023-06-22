import { FC } from "react";
import { ICard } from "./types";

interface ICardFC {
  card: ICard;
}

export const Card: FC<ICardFC> = ({ card }) => {
  function analyticsTrackClick(url: string) {
    // sending clicked link url to analytics
    console.log(url);
  }

  return (
    <div className="card">
      <div className="card__title">{card.title}</div>
      <div className="card__text">{card.text}</div>
      <a
        className={`default-link card__link ${
          card.id == 1 ? "card__link--red" : ""
        }`}
        target={card.id == 1 ? "_blank" : ""}
        rel="nofollow" // не совсем понял что нужно сделать в rel, так как в приведенном примере он ни как не оперделен
        href={card.link}
        onClick={() => analyticsTrackClick(card.link)}
      >
        {card.linkTitle}
      </a>
    </div>
  );
};
