declare type Pronoun = {
  subjectPronoun: Array<PronounItem>;
  objectPronoun: Array<PronounItem>;
  possessiveAdjective: Array<PronounItem>;
  possessivePronoun: Array<PronounItem>;
  reflexivePronoun: Array<PronounItem>;
};

declare type PronounItem = {
  id: number;
  subject: string;
  translation: string;
};
