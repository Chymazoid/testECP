import { GET } from "../api/requests";
import { ICard } from "./types";

const API_CARDS = "https://my-json-server.typicode.com/savayer/demo/posts";

export const getCards = async () => {
  const cards = await GET(API_CARDS);

  return cards.reduce((acc: ICard[], card: any) => {
    acc.push({
      id: card.id,
      title: card.title.en,
      linkTitle: card.link_title,
      text: card.body ? card.body.en : null,
      link: card.link,
    });

    return acc;
  }, []);
};
