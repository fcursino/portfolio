interface LanguageTexts {
  welcome: string;
  presentation: string;
}

interface LanguageSwitch {
  en: LanguageTexts;
  pt: LanguageTexts;
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
    presentation: `My name is Fabrício, I'm ${findYearsPast()} years old. I'm a FullStack developer, and I've been working in the field since 2020. I'm passionate about developing products that make a difference in people's lives.`,
  },
  pt: {
    welcome: "Bem-vindo ao Meu Portfólio",
    presentation: `Meu nome é Fabrício, tenho ${findYearsPast()} anos. Sou desenvolvedor FullStack, e estou atuando na área desde 2020. Sou apaixonado pelo desenvolvimento de produtos que fazem a diferença na vida das pessoas.`,
  },
};
