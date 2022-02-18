declare type OnPronounciation = {
  simplePastTense: Array<OnPronounciationItem>;
  simplePresenteTense: Array<OnPronounciationItem>;
};

declare type OnPronounciationItem = {
  subject: string;
  auxiliaryVerb: string;
  pronounciation: string;
  audioName: string;
};
