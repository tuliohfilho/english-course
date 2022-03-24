declare type PronounCategory = {
  id: number;
  title: string;
  description: string;
};

declare type PronounType = {
  id: number;
  categoryId: number;
  title: string;
  description: string;
  pronouns: Array<Pronoun>;
};

declare type Pronoun = {
  id: number;
  subject: string;
  translations: Array<string>;
};
