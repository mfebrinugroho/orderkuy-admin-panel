import { z } from "zod";

export const createUserSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama wajib diisi")
      .max(225, "Nama maksimal 225 karakter"),

    email: z
      .string()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),

    password: z.string().min(8, "Password minimal 8 karakter"),

    password_confirmation: z.string(),

    role_id: z.number().min(1, "Role wajib dipilih"),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Konfirmasi password tidak sesuai",
    path: ["password_confirmation"],
  });

export type CreateUserFormData = z.infer<typeof createUserSchema>;
