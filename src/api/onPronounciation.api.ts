import { FetchHttp } from "./request";
import { Envs, Enums } from "../utils";

const API_ON_PRONOUNCIATION = `${Envs.REACT_APP_API_HOST}${Enums.API_PATH.ON_PRONOUNCIATION}`;

export const getOnPronounciations = async (): Promise<OnPronounciation> =>
  await FetchHttp.get(API_ON_PRONOUNCIATION);
