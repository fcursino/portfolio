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

type Technology = 'vue' | 'react' | 'javascript' | 'node' | 'python' | 'docker' | 'git' | 'github' | 'php' | 'mysql' | 'html' | 'css';

type Project = {
  project_title: string;
  project_description: string;
  project_technologies: Technology[];
  project_repository: string;
  project_access: string;
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
        project_title: "Cholesterol Forecast",
        project_technologies: ['python', 'git', 'github'],
        project_description: "AI model that informs the probable cholesterol level of a patient, based on information such as weight, height, age and smoking habits, present in the dataset provided.",
        project_repository: '',
        project_access: ''
      },
      {
        project_title: "MS Math",
        project_technologies: ['node', 'javascript', 'docker', 'git', 'github'],
        project_description: "API that performs mathematical calculations of algebra (first-degree equation) and geometry (area) from the data received, made available on two different virtual machines.",
        project_repository: '',
        project_access: ''
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
        project_title: "Cholesterol Forecast",
        project_technologies: ['python', 'git', 'github'],
        project_description: "Modelo de IA que informa o nível provável de colesterol de um paciente, com base em informações como peso, altura, idade e hábitos de fumo, presentes no conjunto de dados fornecido.",
        project_repository: '',
        project_access: ''
      },
      {
        project_title: "MS Math",
        project_technologies: ['node', 'javascript', 'docker', 'git', 'github'],
        project_description: "API que realiza cálculos matemáticos de álgebra(equação de primeiro grau) e geometria(área) a partir dos dados recebidos, disponibilizada em duas máquinas virtuais diferentes.",
        project_repository: '',
        project_access: ''
      }
    ]
  },
};
