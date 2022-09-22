export interface CommonListResponse<T> {
  result: {
    data: T[];
    count: number;
    totalCount?: number;
  } | null;
  error: unknown | Error | null;
}

export interface CommonListParams {
  id?: string;
  search?: string;
  page?: number;
  perPage?: number;
}
