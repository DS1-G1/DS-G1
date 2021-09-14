export default async function (error, _request, response, _next) {
  if (error instanceof Error) {
    return response.status(error.status || 406).json({ error: error.message });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal Server Error",
  });
}