import { FetchHttp } from "./request";
import { Envs, Enums } from "../utils";

const API_PRONOUN = `${Envs.REACT_APP_API_HOST}${Enums.API_PATH.PRONOUN}`;

export const getPronounsCategories = async (): Promise<
  Array<PronounCategory>
> => await FetchHttp.get(`${API_PRONOUN}/categories`);

export const getPronounsTypesByCategoryId = async (
  categoryId: number
): Promise<Array<PronounType>> =>
  await FetchHttp.get(`${API_PRONOUN}/category/${categoryId}/types`);
