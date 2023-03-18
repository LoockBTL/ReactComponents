import i18next from "i18next";
import { FC } from "react";
import { Container, Button, ButtonGroup } from "react-bootstrap";
import { initReactI18next, useTranslation } from "react-i18next";

const transRes = {
  en: {
    translation: {
      text: `O that you were your self! but, love, you are
      No longer yours than you yourself here live;
      Against this coming end you should prepare,
      And your sweet semblance to some other give:
      So should that beauty which you hold in lease
      Find no determination; then you were
      Your self again after yourself's decease,
      When your sweet issue your sweet form should bear.
      Who lets so fair a house fall to decay,
      Which husbandry in honour might uphold
      Against the stormy gusts of winter's day
      And barren rage of death's eternal cold?
      O, none but unthrifts: dear my love, you know
      You had a father, let your son say so.`,
    },
  },
  fr: {
    translation: {
      text: `Oh ! si vous existiez par vous-même ! mais, ami, vous ne vous appartiendrez plus dès que vous aurez vécu votre vie ici-bas. Préparez-vous contre cette fin fatale, et donnez votre douce ressemblance à quelque autre.
      Par là, cette beauté, que vous avez à bail, n'aura pas de terme : ainsi vous vous survivrez, après votre décès même, dans cette douce famille qui gardera votre forme douce.
      Qui donc laisserait tomber en ruine une maison si belle, quand les soins du ménage pourraient la conserver en honneur contre les rafales des jours d'hiver et la rage funeste de cette bise éternelle, la mort ?
      Oh ! nul autre qu'un prodigue ! Cher amour, vous savez, vous avez eu un père : puisse votre fils en dire autant !`,
    },
  },
  de: {
    translation: {
      text: `Oh wärst du doch du selbst! Doch, Liebling, du
      bist's nicht, wenn du allein zu sein gedenkst,
      sorg vor fürs nahe Ende und sieh zu,
      dass du dein Ausseh'n jemand and'rem schenkst.
      Die Schönheit, die dir nur auf Zeit gegeben,
      wird so nicht untergeh'n, wirst du einst sterben,
      denn auch du selbst wirst dann noch überleben,
      wenn deine Kinder deine Schönheit erben.
      Wer will schon, dass ein schönes Haus verfällt,
      wenn es ein Ehepaar erhalten kann
      bei allen Widrigkeiten dieser Welt
      und auch des Todes eisig kaltem Bann?
      Du konntest, Schatz, jemanden Vater nennen,
      das soll ein Sohn zu dir auch sagen können.`,
    },
  },
  es: {
    translation: {
      text: `¡Oh! ¡Si vos, fuerais vuestro! Pero, amor, voz seréis,
      de voz tan solamente, mientras viváis aquí.
      Contra el final cercano ya debéis prepararos,
      plasmando en algún otro, vuestro dulce semblante.
      Así, aquella belleza, que vos gozáis a préstamo
      no hallaría final. Entonces volveríais,
      a ser vos, aún después, de vuestra propia muerte,
      ya que la dulce prole, tendrá tus mismas formas.
      ¿Quién deja derrumbarse, un hogar tan hermoso,
      que un regente viril, con honor mantendría,
      contra los elementos de un cruel día de invierno,
      y el estéril rencor del frío de la muerte?
      Sólo un derrochador y tú, amor, bien lo sabes:
      Vos tuvisteis un padre, que a ti, te nombre un hijo.`,
    },
  },
};

i18next.use(initReactI18next).init({ resources: transRes, lng: "en" });

const ChangeLanguage: FC = () => {
  const { t, i18n } = useTranslation();
  return (
    <Container className="mt-3">
      <ButtonGroup>
        <Button
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </Button>
        <Button
          onClick={() => {
            i18n.changeLanguage("fr");
          }}
        >
          FR
        </Button>
        <Button
          onClick={() => {
            i18n.changeLanguage("de");
          }}
        >
          DE
        </Button>
        <Button
          onClick={() => {
            i18n.changeLanguage("es");
          }}
        >
          ES
        </Button>
      </ButtonGroup>
      <div className="mt-3">{t("text")}</div>
    </Container>
  );
};

export default ChangeLanguage;
