import axios from "axios";
import { FC, useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  ButtonGroup,
} from "react-bootstrap";
import Select from "react-select";

type ServiceTypes = "Convert Wallet" | "Curse history" | "Live curs";

const currencies = {
  AED: "United Arab Emirates Dirham",
  AFN: "Afghan Afghani",
  ALL: "Albanian Lek",
  AMD: "Armenian Dram",
  ANG: "Netherlands Antillean Guilder",
  AOA: "Angolan Kwanza",
  ARS: "Argentine Peso",
  AUD: "Australian Dollar",
  AWG: "Aruban Florin",
  AZN: "Azerbaijani Manat",
  BAM: "Bosnia-Herzegovina Convertible Mark",
  BBD: "Barbadian Dollar",
  BDT: "Bangladeshi Taka",
  BGN: "Bulgarian Lev",
  BHD: "Bahraini Dinar",
  BIF: "Burundian Franc",
  BMD: "Bermudan Dollar",
  BND: "Brunei Dollar",
  BOB: "Bolivian Boliviano",
  BRL: "Brazilian Real",
  BSD: "Bahamian Dollar",
  BTC: "Bitcoin",
  BTN: "Bhutanese Ngultrum",
  BWP: "Botswanan Pula",
  BYN: "New Belarusian Ruble",
  BYR: "Belarusian Ruble",
  BZD: "Belize Dollar",
  CAD: "Canadian Dollar",
  CDF: "Congolese Franc",
  CHF: "Swiss Franc",
  CLF: "Chilean Unit of Account (UF)",
  CLP: "Chilean Peso",
  CNY: "Chinese Yuan",
  COP: "Colombian Peso",
  CRC: "Costa Rican Col\u00f3n",
  CUC: "Cuban Convertible Peso",
  CUP: "Cuban Peso",
  CVE: "Cape Verdean Escudo",
  CZK: "Czech Republic Koruna",
  DJF: "Djiboutian Franc",
  DKK: "Danish Krone",
  DOP: "Dominican Peso",
  DZD: "Algerian Dinar",
  EGP: "Egyptian Pound",
  ERN: "Eritrean Nakfa",
  ETB: "Ethiopian Birr",
  EUR: "Euro",
  FJD: "Fijian Dollar",
  FKP: "Falkland Islands Pound",
  GBP: "British Pound Sterling",
  GEL: "Georgian Lari",
  GGP: "Guernsey Pound",
  GHS: "Ghanaian Cedi",
  GIP: "Gibraltar Pound",
  GMD: "Gambian Dalasi",
  GNF: "Guinean Franc",
  GTQ: "Guatemalan Quetzal",
  GYD: "Guyanaese Dollar",
  HKD: "Hong Kong Dollar",
  HNL: "Honduran Lempira",
  HRK: "Croatian Kuna",
  HTG: "Haitian Gourde",
  HUF: "Hungarian Forint",
  IDR: "Indonesian Rupiah",
  ILS: "Israeli New Sheqel",
  IMP: "Manx pound",
  INR: "Indian Rupee",
  IQD: "Iraqi Dinar",
  IRR: "Iranian Rial",
  ISK: "Icelandic Kr\u00f3na",
  JEP: "Jersey Pound",
  JMD: "Jamaican Dollar",
  JOD: "Jordanian Dinar",
  JPY: "Japanese Yen",
  KES: "Kenyan Shilling",
  KGS: "Kyrgystani Som",
  KHR: "Cambodian Riel",
  KMF: "Comorian Franc",
  KPW: "North Korean Won",
  KRW: "South Korean Won",
  KWD: "Kuwaiti Dinar",
  KYD: "Cayman Islands Dollar",
  KZT: "Kazakhstani Tenge",
  LAK: "Laotian Kip",
  LBP: "Lebanese Pound",
  LKR: "Sri Lankan Rupee",
  LRD: "Liberian Dollar",
  LSL: "Lesotho Loti",
  LTL: "Lithuanian Litas",
  LVL: "Latvian Lats",
  LYD: "Libyan Dinar",
  MAD: "Moroccan Dirham",
  MDL: "Moldovan Leu",
  MGA: "Malagasy Ariary",
  MKD: "Macedonian Denar",
  MMK: "Myanma Kyat",
  MNT: "Mongolian Tugrik",
  MOP: "Macanese Pataca",
  MRO: "Mauritanian Ouguiya",
  MUR: "Mauritian Rupee",
  MVR: "Maldivian Rufiyaa",
  MWK: "Malawian Kwacha",
  MXN: "Mexican Peso",
  MYR: "Malaysian Ringgit",
  MZN: "Mozambican Metical",
  NAD: "Namibian Dollar",
  NGN: "Nigerian Naira",
  NIO: "Nicaraguan C\u00f3rdoba",
  NOK: "Norwegian Krone",
  NPR: "Nepalese Rupee",
  NZD: "New Zealand Dollar",
  OMR: "Omani Rial",
  PAB: "Panamanian Balboa",
  PEN: "Peruvian Nuevo Sol",
  PGK: "Papua New Guinean Kina",
  PHP: "Philippine Peso",
  PKR: "Pakistani Rupee",
  PLN: "Polish Zloty",
  PYG: "Paraguayan Guarani",
  QAR: "Qatari Rial",
  RON: "Romanian Leu",
  RSD: "Serbian Dinar",
  RUB: "Russian Ruble",
  RWF: "Rwandan Franc",
  SAR: "Saudi Riyal",
  SBD: "Solomon Islands Dollar",
  SCR: "Seychellois Rupee",
  SDG: "Sudanese Pound",
  SEK: "Swedish Krona",
  SGD: "Singapore Dollar",
  SHP: "Saint Helena Pound",
  SLE: "Sierra Leonean Leone",
  SLL: "Sierra Leonean Leone",
  SOS: "Somali Shilling",
  SRD: "Surinamese Dollar",
  STD: "S\u00e3o Tom\u00e9 and Pr\u00edncipe Dobra",
  SVC: "Salvadoran Col\u00f3n",
  SYP: "Syrian Pound",
  SZL: "Swazi Lilangeni",
  THB: "Thai Baht",
  TJS: "Tajikistani Somoni",
  TMT: "Turkmenistani Manat",
  TND: "Tunisian Dinar",
  TOP: "Tongan Pa\u02bbanga",
  TRY: "Turkish Lira",
  TTD: "Trinidad and Tobago Dollar",
  TWD: "New Taiwan Dollar",
  TZS: "Tanzanian Shilling",
  UAH: "Ukrainian Hryvnia",
  UGX: "Ugandan Shilling",
  USD: "United States Dollar",
  UYU: "Uruguayan Peso",
  UZS: "Uzbekistan Som",
  VEF: "Venezuelan Bol\u00edvar Fuerte",
  VES: "Sovereign Bolivar",
  VND: "Vietnamese Dong",
  VUV: "Vanuatu Vatu",
  WST: "Samoan Tala",
  XAF: "CFA Franc BEAC",
  XAG: "Silver (troy ounce)",
  XAU: "Gold (troy ounce)",
  XCD: "East Caribbean Dollar",
  XDR: "Special Drawing Rights",
  XOF: "CFA Franc BCEAO",
  XPF: "CFP Franc",
  YER: "Yemeni Rial",
  ZAR: "South African Rand",
  ZMK: "Zambian Kwacha (pre-2013)",
  ZMW: "Zambian Kwacha",
  ZWL: "Zimbabwean Dollar",
};
const currenc = Object.keys(currencies).join("%2C");
const options = Object.keys(currencies).map((val: string) => ({
  value: val,
  label: `${val}: ${currencies[val as keyof typeof currencies]}`,
}));
const axiosReq = axios.create({
  baseURL: "https://api.apilayer.com/currency_data",
  headers: { apikey: "HvlohsKRMaw0STp35VkLkZCwiLJ09ICe" },
});

const ChangeWallet: FC = () => {
  const [service, setService] = useState<ServiceTypes>("Live curs");
  return (
    <Container className="mt-3">
      <ButtonGroup>
        <Button
          onClick={() => {
            setService("Live curs");
          }}
        >
          Live curs
        </Button>
        <Button
          onClick={() => {
            setService("Convert Wallet");
          }}
        >
          Convert Wallet
        </Button>
        <Button
          onClick={() => {
            setService("Curse history");
          }}
        >
          Curse history
        </Button>
      </ButtonGroup>
      {service === "Live curs" ? (
        <LiveCours />
      ) : service === "Convert Wallet" ? (
        <ConvertWallet />
      ) : service === "Curse history" ? (
        <CoursHistory />
      ) : (
        <></>
      )}
    </Container>
  );
};

const LiveCours: FC = () => {
  interface LiveCoursInterface {
    quotes: { [key: string]: number };
    source: string;
    success: boolean;
    timestamp: number;
  }
  type Cours = { [key: string]: number };
  const [source, setSource] = useState("");
  const [courses, setCources] = useState<Cours[]>([]);
  const [search, setSearch] = useState<string>("");

  const getCours = (source: string) => {
    axiosReq
      .get<LiveCoursInterface>(`/live?source=${source}&currencies=${currenc}`)
      .then((res) => {
        let cours = Object.keys(res.data.quotes).map((val) => ({
          [val.slice(3) || "unknown"]:
            res.data.quotes[val as keyof typeof res.data.quotes],
        }));
        setCources(cours);
      })
      .catch((e) => console.log(e));
  };
  return (
    <Card className="w-100 h-50">
      <Card.Header>
        <Card.Title>Live Cours</Card.Title>
      </Card.Header>
      <Card.Body>
        <Select
          options={options}
          onChange={(e) => {
            setSource(e?.value || "unknown");
            getCours(e?.value || "USD");
          }}
        />
        <InputGroup>
          <InputGroup.Text>Search</InputGroup.Text>
          <Form.Control
            value={search}
            onChange={(e) => {
              setSearch(e.target.value.toLocaleUpperCase());
            }}
          />
        </InputGroup>
        {courses
          .filter((obj) => {
            let val = Object.keys(obj)[0];
            return val.includes(search);
          })
          .map((obj) => {
            let val = Object.keys(obj)[0];
            return (
              <Card className="w-100 h-50">
                <Card.Header>
                  <Card.Title>{`${source} to ${val}`}</Card.Title>
                </Card.Header>
                <Card.Body>
                  <Card.Text>{`${obj[val]} ${val}`}</Card.Text>
                </Card.Body>
              </Card>
            );
          })}
      </Card.Body>
    </Card>
  );
};

const ConvertWallet: FC = () => {
  interface ConverWalletInterface {
    info: {
      quote: string;
      timestamp: string;
    };
    query: {
      amount: string;
      from: string;
      to: string;
    };
    result: string;
    success: boolean;
  }
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [req, setReq] = useState<ConverWalletInterface>();

  const convertWallet = async () => {
    axiosReq
      .get<ConverWalletInterface>(
        `/convert?to=${to}&from=${from}&amount=${amount}`
      )
      .then((res) => {
        setReq(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Card className="w-100 h-50">
      <Card.Header>
        <Card.Title>Converter wallet</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="d-flex">
          <div style={{ minWidth: "600px" }}>
            <InputGroup>
              <Select
                styles={{
                  control: (base) => ({
                    ...base,
                    width: "400px",
                  }),
                }}
                options={options}
                onChange={(e) => {
                  setFrom(e?.value || "unknown");
                }}
              />
              <InputGroup.Text>Source wallet</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <Select
                styles={{
                  control: (base) => ({
                    ...base,
                    width: "400px",
                  }),
                }}
                options={options}
                onChange={(e) => {
                  setTo(e?.value || "unknown");
                }}
              />
              <InputGroup.Text>Source wallet</InputGroup.Text>
            </InputGroup>
          </div>
          <div>
            <InputGroup>
              <Form.Control
                type="number"
                min={0}
                style={{ maxWidth: "200px" }}
                onChange={(e) => {
                  setAmount(e.target.value || "unknown");
                }}
              />
              <InputGroup.Text>Amount</InputGroup.Text>
            </InputGroup>
            <Button
              onClick={() => {
                convertWallet();
              }}
            >
              Convert
            </Button>
          </div>
          {req?.success ? (
            <Card className="w-100 h-50">
              <Card.Header>
                <Card.Title>{`${from} to ${to}`}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{`${amount} ${from} will be ${req?.result} ${to}`}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

const CoursHistory: FC = () => {
  interface HistoryInterface {
    date: string;
    historical: boolean;
    quotes: {
      [key: string]: string;
    };
    source: string;
    success: boolean;
    timestamp: string;
  }
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [date, setDate] = useState<string>("");
  const [req, setReq] = useState<HistoryInterface>();

  const getHistory = () => {
    axiosReq
      .get<HistoryInterface>(
        `/historical?date=${date}&source=${from}&currencies=${to}`
      )
      .then((res) => {
        setReq(res.data);
      })
      .catch((e) => console.log(e));
  };

  return (
    <Card className="w-100 h-50">
      <Card.Header>
        <Card.Title>Cours history</Card.Title>
      </Card.Header>
      <Card.Body>
        <div className="d-flex">
          <div style={{ minWidth: "600px" }}>
            <InputGroup>
              <Select
                styles={{
                  control: (base) => ({
                    ...base,
                    width: "400px",
                  }),
                }}
                options={options}
                onChange={(e) => {
                  setFrom(e?.value || "unknown");
                }}
              />
              <InputGroup.Text>Source wallet</InputGroup.Text>
            </InputGroup>
            <InputGroup>
              <Select
                styles={{
                  control: (base) => ({
                    ...base,
                    width: "400px",
                  }),
                }}
                options={options}
                onChange={(e) => {
                  setTo(e?.value || "unknown");
                }}
              />
              <InputGroup.Text>Сurrent wallet</InputGroup.Text>
            </InputGroup>
          </div>
          <div>
            <InputGroup>
              <Form.Control
                type="date"
                style={{ maxWidth: "200px" }}
                onChange={(e) => {
                  setDate(e.target.value || "unknown");
                }}
              />
              <InputGroup.Text>Date</InputGroup.Text>
            </InputGroup>
            <Button
              onClick={() => {
                getHistory();
              }}
            >
              Get course
            </Button>
          </div>
          {new Date()[Symbol.toPrimitive]("number") < Date.parse(date) ? (
            <Card className="w-100 h-50">
              <Card.Body>
                <Card.Title>Can't see in future</Card.Title>
              </Card.Body>
            </Card>
          ) : req?.success ? (
            <Card className="w-100 h-50">
              <Card.Header>
                <Card.Title>{`${from} to ${to} at ${req.date}`}</Card.Title>
              </Card.Header>
              <Card.Body>
                <Card.Text>{`${1} ${from} was ${Object.values(
                  req?.quotes
                )} ${to}`}</Card.Text>
              </Card.Body>
            </Card>
          ) : (
            <></>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ChangeWallet;
