type instanceSkill = {
  name: string;
  value: number;
};

type instanceButtonActive = {
  text: string;
  active: string;
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
    value: 80,
  },
  {
    name: "React JS",
    value: 80,
  },
  {
    name: "React Native",
    value: 60,
  },
  {
    name: "Typescript",
    value: 60,
  },
  {
    name: "Redux",
    value: 70,
  },
  {
    name: "Node JS",
    value: 80,
  },
  {
    name: "Express",
    value: 80,
  },
  {
    name: "Mysql",
    value: 40,
  },
  {
    name: "GitHub",
    value: 40,
  },
];

export const buttonsActive: instanceButtonActive[] = [
  {
    text: "BRB - Banco de Brasília",
    active: "btn-1",
  },
  {
    text: "Gnsystems",
    active: "btn-2",
  },
  {
    text: "Intellectx",
    active: "btn-3",
  },
  {
    text: "Athan",
    active: "btn-4",
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
