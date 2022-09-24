export interface CommonListResponse<T> {
  results: T[] | null;
}

export type SortOrder = '' | 'ascend' | 'descend';

export interface CommonListParams {
  page: number;
  pageSize: number;
  keyword?: string;
  results?: number;
  nat?: string;
  inc?: string;
  gender?: string;
  sortBy?: string;
  sortOrder?: SortOrder;
}
