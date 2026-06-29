import type { ApiResponse } from "@/types/api";
import api from "../libs/axios";
import type { Role } from "@/types/role";

export const roleService = {
  list: async (): Promise<ApiResponse<Role[]>> => {
    const response = await api.get<ApiResponse<Role[]>>(`/api/roles`);

    return response.data;
  },
};
