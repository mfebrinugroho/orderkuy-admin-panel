import type { ApiPaginatedResponse, ApiResponse } from "@/types/api";
import api from "../libs/axios";
import type { User, UserForm } from "@/types/user";
import type { EditUserFormData } from "@/schemas/editUser.schema";

export const userService = {
  list: async (
    page: number = 1,
    limit: number = 10,
    search: string,
  ): Promise<ApiPaginatedResponse<User[]>> => {
    const response = await api.get<ApiPaginatedResponse<User[]>>(
      `/api/users?page=${page}&limit=${limit}&search=${search}`,
    );

    return response.data;
  },
  create: async (payload: UserForm): Promise<ApiResponse<User>> => {
    const response = await api.post<ApiResponse<User>>("/api/users", payload);

    return response.data;
  },
  show: async (id: number): Promise<ApiResponse<User>> => {
    const response = await api.get<ApiResponse<User>>(`/api/users/${id}`);

    return response.data;
  },
  update: async (
    id: number,
    payload: EditUserFormData,
  ): Promise<ApiResponse<User>> => {
    const response = await api.put<ApiResponse<User>>(
      `/api/users/${id}`,
      payload,
    );

    return response.data;
  },
  delete: async (id: number) => {
    const response = await api.delete(`/api/users/${id}`);

    return response.data;
  },
  // list: async (): Promise<ApiPaginatedResponse<User>> => {
  //   const response = await api.get("/api/users");

  //   return response.data;
  // },
  // getUser: async (id: number) => { ... },
  // createUser: async (payload) => { ... },
};
