type propsExperienceData = {
  [key: string]: {
    text: string;
    profession: string;
    data: string;
    titulo: string;
  };
};
type propertyProjects = {
  titulo: string;
  text: string;
  buttonText: string;
};

type instanceProjects = {
  [key: string]: {
    arrProjects: propertyProjects[];
  };
};

export const experienceObj: propsExperienceData = {
  BRB: {
    text: "Trabalhei no BRB de 2017 a 2019, na área de Desenvolvimento de web-sites com CMS Joomla e  WordPress , criando landingpages e sites dinâmicos. Atuando na equipe de desenvolvimento, com práticas de otimização e semântica.",
    profession: "Estágio",
    data: "Out 2017 - Nov 2019  (1 ano e 11 mês)",
    titulo: "BRB - Banco de Brasília",
  },

  Gnsystems: {
    text: "Atualmente trabalho na GN Systems com desenvolvimento de Frontend  e utilizo as seguintes tecnologias: React js, Bootstrap, Sass, HTML5, sou responsável de toda a parte de conexão com api e deploy da aplicação.",
    profession: "Desenvolvedor Front-end",
    data: "Fervereiro 2020 - Atualmente",
    titulo: "Gnsystems",
  },
  Intellectx: {
    text: "Desenvolvimento do sistema do pix no aplicativo ACCREDITO. Participei desse projeto durante 8 meses onde pude ter experiências incríveis no desenvolvimento mobile e web desde consumir apis e criar funções como (Copia e Cola, Transferências, Pix Saque e Troco etc). As tecnologias utilizadas foram REACT NATIVE, REDUX, CSS-JS. AXIOS.",
    profession: "Desenvolvedor Mobile",
    data: "Jan 2022 - Ago 2022  (8 meses)",
    titulo: "Intellectx",
  },
  Athan: {
    text: "Desenvolvimento de plugins para chatbots com REACT JS e criação de sistemas de disparos de campanhas para clientes.",
    profession: "Desenvolvedor Frontend",
    data: "Set 2022 - Dez 2022 (3 meses)",
    titulo: "Athan",
  },
};

export const projectsCard: instanceProjects = {
  page1: {
    arrProjects: [
      {
        titulo: "Pokedex1",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex2",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex3",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
    ],
  },
  page2: {
    arrProjects: [
      {
        titulo: "Pokedex1",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex2",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex3",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex4",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex5",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex6",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
    ],
  },
};
