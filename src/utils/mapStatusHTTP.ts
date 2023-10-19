export default function mapStatusHTTP(type: string): number {
  const statusHTTPMap: Record<string, number> = {
    INVALID_DATA: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    OK: 200,
    CREATED: 201,
  };

  return statusHTTPMap[type];
}
