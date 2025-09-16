export function getToken() {
  return typeof window !== "undefined" ? localStorage.getItem("jwt") : null;
}

export function setToken(token: string) {
  localStorage.setItem("jwt", token);
}

export function clearToken() {
  localStorage.removeItem("jwt");
}
