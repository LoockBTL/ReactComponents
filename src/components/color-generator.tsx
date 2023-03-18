import { FC, useState } from "react";
import { Button, Card, Container, Form, InputGroup } from "react-bootstrap";
import Value from "values.js";

// https://noeldelgado.github.io/shadowlord/#7e00e4
// https://noeldelgado.github.io/shadowlord/#7e00e4
// https://www.youtube.com/watch?v=AknTq0LxoI8&ab_channel=CodingShiksha
const ColorGenerator: FC = () => {
  const [color, setColor] = useState<string>("");
  const [colorList, setColorList] = useState<any[]>([]);

  const createColors = () => {
    try {
      let colors = new Value(color).all(1);
      setColorList(colors);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Container>
      <Card className="w-100 h-50">
        <Card.Header>Input color in HEX format</Card.Header>
        <Card.Body>
          <InputGroup>
            <Form.Control
              value={color}
              onChange={(e) => {
                setColor(e.target.value);
              }}
            />
            <Button
              onClick={() => {
                createColors();
              }}
            >
              Create
            </Button>
          </InputGroup>
          <Card.Text>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
              {colorList.map((obj) => (
                <div
                  key={obj.hex}
                  style={{
                    backgroundColor: `#${obj.hex}`,
                    width: "100px",
                    height: "200px",
                  }}
                >
                  #{obj.hex}
                </div>
              ))}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default ColorGenerator;
