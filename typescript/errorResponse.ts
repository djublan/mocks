export interface IApiInnerError {
  code: string;
  message: string;
  innerError?: IApiInnerError[];
}

export interface IApiError {
  code: string;
  message: string;
  target: string;
  innerError?: IApiInnerError[];
}

export interface IErrorResponse {
  error: IApiInnerError;
}
