export interface CommonListResponse<T> {
  results: T[] | null;
}

export interface CommonListParams {
  page: number;
  pageSize: number;
  keyword?: string;
  results?: number;
  nat?: string;
  inc?: string;
  gender?: string;
  sortBy?: string;
  sortOrder?: string;
}
