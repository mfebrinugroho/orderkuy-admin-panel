import api from "@/libs/axios";

import type {
  Login,
  Register,
  AuthResponse,
  User,
  UserAuth,
} from "@/types/auth";

// GET CSRF COOKIE
export const csrf = async () => {
  await api.get("/sanctum/csrf-cookie");
};

// REGISTER
export const register = async (
  payload: Register,
): Promise<AuthResponse<User>> => {
  await csrf();

  const response = await api.post("/api/register", payload);

  return response.data;
};

// LOGIN
export const login = async (payload: Login): Promise<AuthResponse<User>> => {
  await csrf();

  const response = await api.post("/api/login", payload);

  return response.data;
};

// GET AUTH USER
export const getUser = async (): Promise<UserAuth> => {
  const response = await api.get("/api/user");

  return response.data.data;
};

// LOGOUT
export const logout = async () => {
  const response = await api.post("/api/logout");

  return response.data;
};
