import { nanoid } from "nanoid";
import { FC, useEffect, useState } from "react";
import { Button, Container } from "react-bootstrap";
const colors = [
  "#ff0000",
  "#ff8000",
  "#ffea00",
  "#b3ff00",
  "#00ff66",
  "#00f7ff",
  "#0040ff",
  "#f200ff",
];

interface Card {
  id?: string;
  color?: string;
  found?: boolean;
}

const Table: FC = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [first, setFirst] = useState<Card | null>(null);
  const [second, setSecond] = useState<Card | null>(null);
  const [lock, setLock] = useState<boolean>(false);

  const choiseCheck = (obj: Card) => {
    if (lock) return;
    first ? setSecond(obj) : setFirst(obj);
  };

  const resetChoisen = () => {
    setFirst(null);
    setSecond(null);
    setLock(false);
  };

  const createGame = () => {
    const shuffle = [...colors, ...colors]
      .sort(() => Math.random() - 0.5)
      .map((color) => ({ color, id: nanoid(), found: false }));
    setCards(shuffle);
  };

  useEffect(() => {
    if (first && second) {
      setLock(true);
      if (first.color === second.color) {
        setCards((prevState) =>
          prevState.map((obj) =>
            obj.color === first.color ? { ...obj, found: true } : obj
          )
        );
        resetChoisen();
      } else {
        setTimeout(() => resetChoisen(), 1000);
      }
    }
  }, [second, first]);

  return (
    <Container className="mt-3">
      <Button onClick={() => createGame()}>Create new game</Button>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "300px",
        }}
      >
        {cards.map((card) => (
          <CardItem
            key={card.id}
            card={card}
            flipped={
              card.id === first?.id ||
              card.id === second?.id ||
              card.found ||
              false
            }
            choiseCheck={choiseCheck}
          />
        ))}
      </div>
      {cards.length === 0
        ? ""
        : cards.filter((obj) => obj.found).length === cards.length
        ? "You won"
        : ""}
    </Container>
  );
};
interface CardItemProps extends Card {
  choiseCheck: (obj: Card) => void;
  card: Card;
  flipped: boolean;
}
const CardItem: FC<CardItemProps> = ({ card, choiseCheck, flipped }) => {
  return (
    <div className={flipped ? "card-game flip" : "card-game"}>
      <div className="front" style={{ backgroundColor: card.color }}></div>
      <div
        className="back"
        onClick={() => {
          choiseCheck(card);
        }}
      ></div>
    </div>
  );
};

export default Table;
