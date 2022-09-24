// put your API calls here, you can create another file
// to make more collection of specific endpoints

import apiCall from '../axios';
import METHODS from '../methods';
import { CommonListParams, CommonListResponse } from '../models';
import { UserListResponse } from './model';

const fetchUsers = async (
  params?: CommonListParams,
): Promise<CommonListResponse<UserListResponse>> => {
  const response = await apiCall(METHODS.GET, '', params);
  return { results: response.data };
};

export default {
  fetchUsers,
};
