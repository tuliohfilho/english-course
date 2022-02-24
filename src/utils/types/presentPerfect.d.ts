declare type PresentPerfect = {
  longForm: Array<PresentPerfectItem>;
  shortForm: Array<PresentPerfectItem>;
};

declare type PresentPerfectItem = {
  id: string;
  verb: string;
  subject: string;
  auxiliaryVerb: string;
};
