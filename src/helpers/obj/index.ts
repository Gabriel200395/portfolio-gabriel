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
  Gnsystems: {
    text: " Atualmente trabalho como professor conteudista em frontend na Digital House, o trabalho consiste em criar conteúdos para asaulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components",
    profession: "Professor conteudista em Frontend",
    data: "Nov 2021 - Atual Quase 1 ano",
    titulo: "Gnsystems",
  },
  Intellectx: {
    text: " Atualmente trabalho como professor conteudista em frontend na Digital House, o trabalho consiste em criar conteúdos para asaulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components",
    profession: "Professor conteudista em Frontend",
    data: "Intellectx",
    titulo: "Intellectx",
  },
  Athan: {
    text: " Atualmente trabalho como professor conteudista em frontend na Digital House, o trabalho consiste em criar conteúdos para asaulas de especialização frontend. Alguns temas dos conteúdos realizados foram: React, Redux, TypeScript, Testes, GraphQL, Next.js, MUI, React Hook Form e styled-components",
    profession: "Professor conteudista em Frontend",
    data: "Athan",
    titulo: "Athan",
  },
};

export const projectsCard: instanceProjects = {
  page1: {
    arrProjects: [
      {
        titulo: "Pokedex",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex1",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokede0",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
    ],
  },
  page2: {
    arrProjects: [
      {
        titulo: "Pokedex",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex1",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokede0",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokedex1",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
      {
        titulo: "Pokede0",
        text: "Site institucional de banco digital moderno, feito em HTML, Sass eJavaScript.",
        buttonText: "Vizualizar Projeto",
      },
    ],
  },
};

