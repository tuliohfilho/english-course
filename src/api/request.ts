import axios from 'axios';

const getConfigDefault = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
    },
};

const postConfigDefault = {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
};

const deleteConfigDefault = {
    method: 'DELETE',
    headers: {
        'Content-Type': 'aplication/json'
    }
};

const pathConfigDefault = {
    method: 'PATCH',
    headers: {
        'Content-Type': 'application/json',
    }
};

const get = async (to: string, requestConfig?: any): Promise<any> => {
    const config = requestConfig || getConfigDefault;

    try {
        const resp = axios.get(to, config).then((res) => res.data);

        return await resp;
    } catch (err) {
        return console.log(err);
    }
}

const post = async (to: string, body: any, requestConfig?: any): Promise<any> => {
    const config = requestConfig || postConfigDefault;

    config.body = JSON.stringify(body);

    try {
        const resp = await axios.post(to, config).then((res) => res.data);
        
        return await resp;
    } catch (err) {
        return console.log(err);
    }
}

const deleteF = async (to: string, id: number | string, requestConfig?: any): Promise<any> => {
    const config = requestConfig || deleteConfigDefault;

    try {
        const resp = axios.delete(`${to}/${id}`, config).then((res) => res.data);

        return await resp;
    } catch (err) {
        return console.log(err);
    }
}

const patch = async (to: string, body: any, requestConfig?: any): Promise<any> => {
    const config = requestConfig || pathConfigDefault;

    config.body = JSON.stringify(body);

    try {
        const resp = axios.patch(`${to}/${body.id}`, config).then((res) => res.data);
        
        return await resp;
    } catch (err) {
        return console.log(err);
    }
}

export const FetchHttp: {
    get(to: string, requestConfig?: any): Promise<any>,
    post(to: string, body: any, requestConfig?: any): Promise<any>,
    patch(to: string, body: any, requestConfig?: any): Promise<any>,
    delete(to: string, id: number | string, requestConfig?: any): Promise<any>
} = {
    get,
    post,
    patch,
    delete: deleteF
}