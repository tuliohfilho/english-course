declare type PresentPerfect = {
  longForm: Array<PresentPerfectItem>;
  shortForm: Array<PresentPerfectItem>;
};

declare type PresentPerfectItem = {
  id: number;
  verb: string;
  subject: string;
  auxiliaryVerb: string;
};
