declare type OnPronounciationType = {
  id: number;
  title: string;
  description: string;
  onPronounciations?: Array<OnPronounciation>;
};

declare type OnPronounciation = {
  id: number;
  typeId: number;
  subject: string;
  audioName: string;
  auxiliaryVerb: string;
  pronounciation: string;
};
