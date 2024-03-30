export const ApiError = (error: unknown) => {
  if (error instanceof Error) {
    return {
      ok: false,
      error: error.message,
      data: null,
    }
  }
  return {
    ok: false,
    error: 'Unknown error',
    data: null,
  }
}
