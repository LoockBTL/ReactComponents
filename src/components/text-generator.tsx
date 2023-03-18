import { FC, useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import { loremIpsum } from "lorem-ipsum";

const TextGenerator: FC = () => {
  const [count, setCount] = useState<number>(1);
  const [create, setCreate] = useState<boolean>(false);

  return (
    <Container>
      <Card className="w-100 h-50">
        <Card.Header>Enter the number</Card.Header>
        <Card.Body>
          <InputGroup>
            <Form.Control
              type="number"
              min={1}
              value={count}
              onChange={(e) => {
                setCreate(false);
                setCount(parseInt(e.target.value));
              }}
            />
            <Button
              onClick={() => {
                setCreate(true);
              }}
            >
              Create
            </Button>
          </InputGroup>
          <Card.Text>
            {create
              ? loremIpsum({
                  count,
                  paragraphLowerBound: 4,
                  paragraphUpperBound: 6,
                  units: "sentences",
                })
              : ""}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default TextGenerator;
