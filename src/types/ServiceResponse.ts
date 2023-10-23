type ServiceResponseErrorType = 'BAD_REQUEST' | 'INVALID_DATA' | 'UNAUTHORIZED' | 'NOT_FOUND';
export type ServiceResponseError = {
  status: ServiceResponseErrorType,
  data: { message: string }
};

export type ServiceResponseSuccess<Type> = {
  status: 'SUCCESSFUL' | 'CREATED',
  data: Type
};

export type ServiceResponse<Type> = ServiceResponseSuccess<Type> | ServiceResponseError;