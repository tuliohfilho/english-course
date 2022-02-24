declare type OnPronounciation = {
  simplePastTense: Array<OnPronounciationItem>;
  simplePresenteTense: Array<OnPronounciationItem>;
};

declare type OnPronounciationItem = {
  id: string;
  subject: string;
  auxiliaryVerb: string;
  pronounciation: string;
  audioName: string;
};
