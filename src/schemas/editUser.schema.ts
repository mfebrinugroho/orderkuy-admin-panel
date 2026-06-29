import { z } from "zod";

export const editUserSchema = z
  .object({
    name: z
      .string()
      .min(1, "Nama wajib diisi")
      .max(225, "Nama maksimal 225 karakter"),

    email: z
      .string()
      .min(1, "Email wajib diisi")
      .email("Format email tidak valid"),
    password: z
      .string()
      .min(8, "Password minimal 8 karakter")
      .optional()
      .or(z.literal("")),

    password_confirmation: z.string().optional(),

    role_id: z.number().min(1, "Role wajib dipilih"),
  })
  .refine(
    (data) => {
      if (!data.password) return true;

      return data.password === data.password_confirmation;
    },
    {
      message: "Konfirmasi password tidak sesuai",
      path: ["password_confirmation"],
    },
  );

export type EditUserFormData = z.infer<typeof editUserSchema>;
