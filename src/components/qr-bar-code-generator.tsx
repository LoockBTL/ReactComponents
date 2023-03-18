import { FC, useState } from "react";
import { Container, Form, InputGroup, Button, Card } from "react-bootstrap";
import { QRCode } from "react-qrcode-logo";
import Barcode from "react-barcode";

type CodeType = "QR" | "BAR" | "";

const QrBarCodeGenerator: FC = () => {
  const [text, setText] = useState<string>("");
  const [code, setCode] = useState<CodeType>("");
  const [bgColor, setBgColor] = useState<string>("#ffffff");
  const [lnColor, setLnColor] = useState<string>("#000000");

  return (
    <Container className="mt-3">
      <InputGroup>
        <Form.Control
          placeholder="Print your text"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
        <Button
          onClick={() => {
            setCode("QR");
          }}
        >
          QR Code
        </Button>
        <Button
          onClick={() => {
            setCode("BAR");
          }}
        >
          Bar Code
        </Button>
      </InputGroup>
      <Card className="w-100">
        <Card.Header>
          <Card.Title>
            {code === "QR"
              ? "QR Code"
              : code === "BAR"
              ? "Bar Code"
              : "Select code type"}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <InputGroup>
            <Form.Control
              type="color"
              value={lnColor}
              onChange={(e) => {
                setLnColor(e.target.value);
              }}
            />
            <InputGroup.Text>Front color</InputGroup.Text>
            <Form.Control
              type="color"
              value={bgColor}
              onChange={(e) => {
                setBgColor(e.target.value);
              }}
            />
            <InputGroup.Text>Background color</InputGroup.Text>
          </InputGroup>

          <div style={{ display: "flex", justifyContent: "center" }}>
            {text.length > 0 && code === "QR" ? (
              <QRCode value={text} bgColor={bgColor} fgColor={lnColor} />
            ) : text.length > 0 && code === "BAR" ? (
              <Barcode
                value={text}
                width={1}
                lineColor={lnColor}
                background={bgColor}
              />
            ) : (
              <></>
            )}
          </div>
          {/*https://github.com/gcoro/react-qrcode-logo
          https://www.npmjs.com/package/react-barcode*/}
        </Card.Body>
      </Card>
    </Container>
  );
};
export default QrBarCodeGenerator;
