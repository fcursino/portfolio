interface LanguageTexts {
  welcome: string;
  presentation_title: string;
  presentation: string;
  skills_title: string;
  projects_title: string;
  projects: Project[];
}

interface LanguageSwitch {
  en: LanguageTexts;
  pt: LanguageTexts;
}

type Project = {
  project_title: string;
  project_description: string;
}

function findYearsPast(): number {
  const currentDate = new Date();
  const initialDate = new Date(2001, 4, 7);
  let anos = currentDate.getFullYear() - initialDate.getFullYear();

  if (
    currentDate.getMonth() < initialDate.getMonth() ||
    (currentDate.getMonth() === initialDate.getMonth() &&
      currentDate.getDate() < initialDate.getDate())
  ) {
    anos--;
  }
  return anos;
}

export const LANGUAGE_SWITCH: LanguageSwitch = {
  en: {
    welcome: "Welcome to My Portfolio",
    presentation_title: "Who am I?",
    presentation: `My name is Fabrício, I'm ${findYearsPast()} years old. I'm a FullStack developer, and I've been working in the field since 2020. I'm passionate about developing products that make a difference in people's lives.`,
    skills_title: "Skills",
    projects_title: "Projects",
    projects: [
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      },
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      },
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      },
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      }
    ]
  },
  pt: {
    welcome: "Bem-vindo ao Meu Portfólio",
    presentation_title: "Quem sou eu?",
    presentation: `Meu nome é Fabrício, tenho ${findYearsPast()} anos. Sou desenvolvedor FullStack, e estou atuando na área desde 2020. Sou apaixonado pelo desenvolvimento de produtos que fazem a diferença na vida das pessoas.`,
    skills_title: "Habilidades",
    projects_title: "Projetos",
    projects: [
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      },
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      },
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      },
      {
        project_title: "Projeto A",
        project_description: "A prática cotidiana prova que o julgamento imparcial das eventualidades causa impacto indireto na reavaliação do retorno esperado a longo prazo. Não obstante, a complexidade dos estudos efetuados afeta positivamente a correta previsão das diretrizes de desenvolvimento para o futuro. No mundo atual, a contínua expansão de nossa atividade faz parte de um processo de gerenciamento do processo de comunicação como um todo. Pensando mais a longo prazo, o surgimento do comércio virtual auxilia a preparação e a composição do fluxo de informações."
      }
    ]
  },
};
