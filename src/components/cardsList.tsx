import { FC, useEffect, useState } from "react";
import { Card } from "./card";
import { getCards } from "./helpers";
import { ICard } from "./types";

export const CardsList: FC = () => {
  const [cards, setCards] = useState<ICard[]>([] as ICard[]);

  useEffect(() => {
    (async () => {
      getCards().then((data: ICard[]) => setCards(data));
    })();
  }, []);

  return (
    <div>
      {cards.map((card: ICard, index: number) => {
        return <Card key={`ck_${index}`} card={card} />;
      })}
    </div>
  );
};
