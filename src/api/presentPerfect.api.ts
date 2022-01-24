import { FetchHttp } from './request';
import { Envs, Enums } from "../utils"

const API_PRESENT_PERFECT = `${Envs.REACT_APP_API_HOST}${Enums.API_PATH.PRESENT_PERFECT}`;

export const getPresentPerfects =
    async (): Promise<PresentPerfect> => 
        await FetchHttp.get(API_PRESENT_PERFECT);