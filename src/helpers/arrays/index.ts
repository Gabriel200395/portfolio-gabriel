type instanceSkill = {
  name: string;
  value: number;
};

type instanceButtonActive = {
  text: string;
  active: string;
  flag: string;
};

type PropsMenuItemNav = {
  text: string;
  href: string;
};

export const skills: instanceSkill[] = [
  {
    name: "HTML",
    value: 100,
  },
  {
    name: "Css",
    value: 70,
  },
  {
    name: "Bootstrap",
    value: 60,
  },
  {
    name: "JS",
    value: 70,
  },
  {
    name: "React JS",
    value: 70,
  },
  {
    name: "React Native",
    value: 60,
  },
  {
    name: "Typescript",
    value: 50,
  },
  {
    name: "Redux",
    value: 60,
  },
  {
    name: "Node JS",
    value: 40,
  },
  {
    name: "Express",
    value: 40,
  },
  {
    name: "Mysql",
    value: 40,
  },
  {
    name: "Sass",
    value: 60,
  },
  {
    name: "Css-Flexbox",
    value: 70,
  },
  {
    name: "Css-Grid-Layout",
    value: 50,
  },
  {
    name: "React-Testing-Lybrary",
    value: 70,
  },
];

export const buttonsActive: instanceButtonActive[] = [
  {
    text: "BRB - Banco de Brasília",
    active: "btn-1",
    flag: "BRB",
  },
  {
    text: "Gnsystems",
    active: "btn-2",
    flag: "Gnsystems",
  },
  {
    text: "Intellectx",
    active: "btn-3",
    flag: "Intellectx",
  },
  {
    text: "Athan",
    active: "btn-4",
    flag: "Athan",
  },
];

export const listItemNav: PropsMenuItemNav[] = [
  {
    text: "Ínicio",
    href: "#inicio",
  },
  {
    text: "Quem sou",
    href: "#quem-sou",
  },
  {
    text: "Projetos",
    href: "#projetos",
  },
  {
    text: "Serviços",
    href: "#servicos",
  },
  {
    text: "Conhecimentos",
    href: "#conhecimentos",
  },
];
