export interface DigiyApiResponse<T> {
  ok: boolean;
  data?: T;
  error?: string;
  trace_id?: string;
}
