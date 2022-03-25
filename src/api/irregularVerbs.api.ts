import { FetchHttp } from "./request";
import { Envs, Enums } from "../utils";

const API_IRREGULAR_VERBS = `${Envs.REACT_APP_API_HOST}/${Enums.API_PATH.IRREGULAR_VERBS}`;

export const getIrregularVerbs = async (): Promise<Array<IrregularVerb>> =>
  await FetchHttp.get(API_IRREGULAR_VERBS);
