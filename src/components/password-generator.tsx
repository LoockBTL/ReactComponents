import { FC, useState } from "react";
import { Container, Form, InputGroup, Button, Card } from "react-bootstrap";

const PasswordGenerator: FC = () => {
  const [password, setPassword] = useState<string>("");
  const [leng, setLeng] = useState<number>(6);
  const [number, setNumber] = useState<boolean>(false);
  const [upper, setUpper] = useState<boolean>(false);
  const [symbol, setSymbol] = useState<boolean>(false);
  const [duplicate, setDuplicate] = useState<boolean>(false);

  function getRandomNumber(password: string): string {
    let genNum = String.fromCharCode(Math.floor(Math.random() * 10) + 48);
    if (duplicate) {
      if (password.includes(genNum)) {
        return getRandomNumber(password);
      }
      return genNum;
    } else {
      return genNum;
    }
  }
  function getRandomLower(password: string): string {
    let genLow = String.fromCharCode(Math.floor(Math.random() * 26) + 97);
    if (duplicate) {
      if (password.includes(genLow)) {
        return getRandomLower(password);
      }
      return genLow;
    } else {
      return genLow;
    }
  }
  function getRandomUpper(password: string): string {
    let genUpp = String.fromCharCode(
      Math.floor(Math.random() * 26) + 97
    ).toUpperCase();
    if (duplicate) {
      if (password.includes(genUpp)) {
        return getRandomUpper(password);
      }
      return genUpp;
    } else {
      return genUpp;
    }
  }
  function getRandomSymbol(password: string): string {
    const symbols = "!@#$%^&*(){}[]=<>/,.";
    let genSym = symbols[Math.floor(Math.random() * symbols.length)];
    if (duplicate) {
      if (password.includes(genSym)) {
        return getRandomSymbol(password);
      }
      return genSym;
    } else {
      return genSym;
    }
  }
  const passGener = () => {
    let password = "";
    for (; password.length < leng; ) {
      if (number) {
        password += getRandomNumber(password);
      }
      if (symbol) {
        password += getRandomSymbol(password);
      }
      if (upper) {
        password += getRandomUpper(password);
      }
      password += getRandomLower(password);
    }
    setPassword(password);
  };

  return (
    <Container className="mt-3">
      <InputGroup>
        <Form.Control
          value={password}
          placeholder="Click the button to generate a password"
        />
        <Button
          onClick={() => {
            passGener();
          }}
        >
          Generate Password
        </Button>
      </InputGroup>
      <Card className="w-100 h-50">
        <InputGroup>
          <Form.Range
            value={leng}
            min={6}
            max={20}
            onChange={(e) => {
              setLeng(parseInt(e.target.value));
            }}
          />
          <InputGroup.Text>{leng}</InputGroup.Text>
        </InputGroup>
      </Card>
      <Card className="w-100 h-50">
        <InputGroup>
          <InputGroup.Text>Use numbers</InputGroup.Text>
          <InputGroup.Checkbox
            value={number}
            onChange={() => {
              setNumber(!number);
            }}
          />
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Use uppercase</InputGroup.Text>
          <InputGroup.Checkbox
            value={upper}
            onChange={() => {
              setUpper(!upper);
            }}
          />{" "}
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Use symbols</InputGroup.Text>
          <InputGroup.Checkbox
            value={symbol}
            onChange={() => {
              setSymbol(!symbol);
            }}
          />{" "}
        </InputGroup>
        <InputGroup>
          <InputGroup.Text>Exclude duplicate</InputGroup.Text>
          <InputGroup.Checkbox
            value={duplicate}
            onChange={() => {
              setDuplicate(!duplicate);
            }}
          />{" "}
        </InputGroup>
      </Card>
    </Container>
  );
};
export default PasswordGenerator;
