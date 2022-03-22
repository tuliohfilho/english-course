import { FetchHttp } from "./request";
import { Envs, Enums } from "../utils";

const API_PRONOUN = `${Envs.REACT_APP_API_HOST}${Enums.API_PATH.PRONOUN}`;

export const getPronouns = async (): Promise<Pronoun> =>
  await FetchHttp.get(API_PRONOUN);

export const getPronounsTypes = async (): Promise<Array<PronounType>> =>
  await FetchHttp.get(`${API_PRONOUN}/types`);
