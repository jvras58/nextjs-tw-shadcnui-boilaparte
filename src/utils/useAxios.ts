import { AxiosError, AxiosResponse } from 'axios';
import api from '../services/api';

interface HttpParams {
  url: string;
  body?: object;
  setState?: (data: unknown) => unknown;
  process?: (data?: unknown) => unknown;
  success?: (res: AxiosResponse) => void;
  error?: (error: AxiosError) => void;
  config?: object;
}

function useAxios(...methods: ('get' | 'post' | 'put' | 'delete' | 'patch')[]) {
  if (methods.length === 0) {
    throw new TypeError(
      'Methods array is empty, add a method to `useAxios` parameters'
    );
  }

  const functions = methods.map((method) => {
    if (!['get', 'post', 'put', 'delete', 'patch'].includes(method)) {
      throw new TypeError(`Invalid method (${method})`);
    }

    const httpRequest = async ({
      url: relativeUrl = '/',
      body = {},
      setState = () => '',
      process = (data: unknown) => data,
      success = () => '',
      error = () => '',
      config = {}
    }: HttpParams) => {
      try {
        const { headers } = getOptions();

        const methodsArguments = {
          get: [{ headers, ...config }],
          post: [body, { headers, ...config }],
          put: [body, { headers, ...config }],
          patch: [body, { headers, ...config }],
          delete: [{ headers, data: body, ...config }]
        };

        const res = await api[method](relativeUrl, ...methodsArguments[method]);

        if (method === 'get') {
          if (setState) {
            setState(await process(res.data.data));
          } else {
            process(res.data.data);
          }
        }

        success(res);
        return res;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (err: any) {
        console.log(err?.response);
        error(err);

        return err;
      }
    };

    return httpRequest;
  });

  const first = functions[0];
  const second = functions[1];
  const third = functions[2];
  const fourth = functions[3];
  const fifth = functions[4];

  return [
    ...(first ? [first] : []),
    ...(second ? [second] : []),
    ...(third ? [third] : []),
    ...(fourth ? [fourth] : []),
    ...(fifth ? [fifth] : [])
  ];
}

const getOptions = () => {
  const headers = {
    'Access-Control-Allow-Origin': '*'
  };
  return {
    headers
  };
};

export { useAxios };
