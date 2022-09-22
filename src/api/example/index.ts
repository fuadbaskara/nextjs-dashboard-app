// put your API calls here, you can create another file
// to make more collection of specific endpoints

import apiCall from '../axios';
import METHODS from '../methods';
import { CommonListParams, CommonListResponse } from '../models';
import { Example } from './model';

const fetchExample = async (params?: CommonListParams): Promise<CommonListResponse<Example>> => {
  try {
    const response = await apiCall(METHODS.GET, '', params);
    return { result: response.data, error: null };
  } catch (err) {
    return { result: null, error: err };
  }
};

export default {
  fetchExample,
};
