import type { ApiResponse } from "@/types/api";

export interface Login {
  email: string;
  password: string;
}

export interface Register {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
}

export interface Role {
  slug: string;
  name: string;
}

export interface UserDetail extends User {
  email_verified_at: string | null;
  created_at: string;
  updated_at: string;
}

export interface UserAuth extends User {
  role: Role;
}

export interface AuthResponse<T> extends ApiResponse<T> {
  token: string;
}
