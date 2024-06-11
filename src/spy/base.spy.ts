/***
 *
 * 基础爬虫
 *
 */
import axios from 'axios';

export enum METHOD {
  post,
  get,
}

interface IParams {
  url: string;
  method: METHOD;
  data?: any;
}

class BaseSpy {
  getPageContent(params: IParams) {
    if (params.method === METHOD.post) {
      return axios.post(params.url, params.data);
    }
    return axios.get(params.url);
  }
}

export default BaseSpy;
