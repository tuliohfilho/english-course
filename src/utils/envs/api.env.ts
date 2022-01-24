import { getEnv } from "./envConfigs";

const Api_Host = {
    REACT_APP_API_HOST: getEnv('REACT_APP_API_HOST')
}

export default Api_Host;