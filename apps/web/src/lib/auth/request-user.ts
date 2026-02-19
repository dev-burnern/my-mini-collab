export async function getRequestUserId(request: Request) {
  const userId = request.headers.get("x-user-id");

  if (!userId) {
    throw new Error("UNAUTHORIZED");
  }

  return userId;
}
