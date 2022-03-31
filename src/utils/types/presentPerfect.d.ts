declare type PresentPerfectType = {
  id: number;
  title: string;
  description: string;
  presentPerfects?: Array<PresentPerfect>;
};

declare type PresentPerfect = {
  id: number;
  typeId: number;
  verb: string;
  subject: string;
  auxiliaryVerb: string;
};
