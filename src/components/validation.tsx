import {
  Container,
  Form,
  OverlayTrigger,
  Popover,
  InputGroup,
  Button,
} from "react-bootstrap";

import { FC, useState } from "react";

interface PasswordValidate {
  lengthv: boolean;
  number: boolean;
  symbol: boolean;
  latlow: boolean;
  latbig: boolean;
}

const Validation: FC = () => {
  const [showEmail, setShowEmail] = useState<boolean>(false);
  const [showEmailRepeat, setEmailRepeat] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordRepeat, setPasswordRepeat] = useState<boolean>(false);

  const [email, setEmail] = useState<string>("");
  const [emailRep, setEmailRep] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordRep, setPasswordRep] = useState<string>("");

  let standartValidateObject = {
    lengthv: true,
    number: true,
    symbol: true,
    latlow: true,
    latbig: true,
  };
  let len = standartValidateObject.lengthv,
    num = standartValidateObject.number,
    sym = standartValidateObject.symbol,
    low = standartValidateObject.latlow,
    big = standartValidateObject.latbig;
  const [hidePassword, setHidePassword] = useState<boolean>(true);
  const [valPassword, setValPassword] = useState<PasswordValidate>(
    standartValidateObject
  );

  const EMAIL_REG =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const PASS_NUM = /(?=.*[0-9])/g;
  const PASS_SYM = /(?=.*[!@#$%^&*])/g;
  const PASS_LOW_LAT = /(?=.*[a-z])/g;
  const PASS_BIG_LAT = /(?=.*[A-Z])/g;

  const emailPopover = (
    <Popover>
      <Popover.Header as="h3">Validation error</Popover.Header>
      <Popover.Body>This is not a email</Popover.Body>
    </Popover>
  );
  const emailRepeatPopover = (
    <Popover>
      <Popover.Header as="h3">Validation error</Popover.Header>
      <Popover.Body>This email isn't as previus</Popover.Body>
    </Popover>
  );
  const UpdatingPopover = (
    <Popover>
      <Popover.Header as="h3">Password validation</Popover.Header>
      <Popover.Body>
        <div>Length:{valPassword.lengthv ? "True" : "False"}</div>
        <div>Number:{valPassword.number ? "True" : "False"}</div>
        <div>Symbol:{valPassword.symbol ? "True" : "False"}</div>
        <div>Low:{valPassword.latlow ? "True" : "False"}</div>
        <div>Big:{valPassword.latbig ? "True" : "False"}</div>
      </Popover.Body>
    </Popover>
  );
  const passwordRepeatPopover = (
    <Popover>
      <Popover.Header as="h3">Validation error</Popover.Header>
      <Popover.Body>This password isn't as previus</Popover.Body>
    </Popover>
  );

  return (
    <Container className="mt-3">
      <InputGroup className="mb-5" style={{ width: "50%" }}>
        <InputGroup.Text>Email</InputGroup.Text>
        <OverlayTrigger
          show={showEmail}
          placement="right-end"
          overlay={emailPopover}
        >
          <Form.Control
            value={email}
            placeholder="Write email"
            onChange={(e) => {
              setEmail(e.target.value);
              setShowEmail(!EMAIL_REG.test(e.target.value));
              setEmailRepeat(!(e.target.value === emailRep));
            }}
          />
        </OverlayTrigger>
      </InputGroup>
      <InputGroup className="mb-5" style={{ width: "50%" }}>
        <InputGroup.Text>Email repeat</InputGroup.Text>

        <OverlayTrigger
          show={showEmailRepeat}
          placement="right-start"
          overlay={emailRepeatPopover}
        >
          <Form.Control
            value={emailRep}
            placeholder="Repeat email"
            onChange={(e) => {
              setEmailRep(e.target.value);
              setEmailRepeat(!(email === e.target.value));
            }}
          />
        </OverlayTrigger>
      </InputGroup>
      <InputGroup className="mb-5" style={{ width: "50%" }}>
        <InputGroup.Text>Password</InputGroup.Text>
        <OverlayTrigger
          show={showPassword}
          placement="right-end"
          overlay={UpdatingPopover}
        >
          <Form.Control
            value={password}
            placeholder="Write password"
            type={hidePassword ? "password" : "text"}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordRepeat(!(e.target.value === passwordRep));
              if (e.target.value.length < 6) {
                len = false;
                setShowPassword(true);
              }
              if (!PASS_NUM.test(e.target.value)) {
                num = false;
                setShowPassword(true);
              }
              if (!PASS_SYM.test(e.target.value)) {
                sym = false;
                setShowPassword(true);
              }
              if (!PASS_LOW_LAT.test(e.target.value)) {
                low = false;
                setShowPassword(true);
              }
              if (!PASS_BIG_LAT.test(e.target.value)) {
                big = false;
                setShowPassword(true);
              }
              if (e.target.value.length < 2) {
                setShowPassword(false);
              }
              if (
                PASS_BIG_LAT.test(e.target.value) &&
                e.target.value.length < 6 &&
                PASS_LOW_LAT.test(e.target.value) &&
                PASS_SYM.test(e.target.value) &&
                PASS_NUM.test(e.target.value)
              ) {
                setShowPassword(false);
              }

              return setValPassword({
                lengthv: len,
                number: num,
                symbol: sym,
                latlow: low,
                latbig: big,
              });
            }}
          />
        </OverlayTrigger>
      </InputGroup>
      <InputGroup className="mb-5" style={{ width: "50%" }}>
        <InputGroup.Text>Password repeat</InputGroup.Text>
        <OverlayTrigger
          show={showPasswordRepeat}
          placement="right-end"
          overlay={passwordRepeatPopover}
        >
          <Form.Control
            value={passwordRep}
            placeholder="Repeat password"
            type={hidePassword ? "password" : "text"}
            onChange={(e) => {
              setPasswordRep(e.target.value);
              setPasswordRepeat(!(password === e.target.value));
            }}
          />
        </OverlayTrigger>
      </InputGroup>
      <Button
        onClick={() => {
          setHidePassword(!hidePassword);
        }}
      >
        Show Password
      </Button>
    </Container>
  );
};

export default Validation;
