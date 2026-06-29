import Input from "@/components/ui/input/Input";
import Label from "@/components/ui/input/Label";
import Select from "@/components/ui/input/Select";
import { PATH } from "@/routes/path";
import type { EditUserFormData } from "@/schemas/editUser.schema";
import type { Role } from "@/types/role";
import type { FieldErrors, UseFormRegister } from "react-hook-form";
import { Link } from "react-router";

interface UserFormProps {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  register: UseFormRegister<EditUserFormData>;
  errors: FieldErrors<EditUserFormData>;
  roles: Role[];
  isSubmitting: boolean;
}

const UserEditForm = ({
  onSubmit,
  register,
  errors,
  roles,
  isSubmitting,
}: UserFormProps) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="space-y-6">
          <div>
            <Label htmlFor="name">Nama</Label>
            <Input
              type="text"
              id="name"
              placeholder="Nama User"
              error={!!errors.name}
              hint={errors.name?.message}
              {...register("name")}
            />
          </div>

          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              placeholder="Email User"
              error={!!errors.email}
              hint={errors.email?.message}
              {...register("email")}
            />
          </div>

          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              placeholder="Password User"
              error={!!errors.password}
              hint={errors.password?.message}
              {...register("password")}
            />
          </div>

          <div>
            <Label htmlFor="password_confirmation">Konfirmasi Password</Label>
            <Input
              type="password"
              id="password_confirmation"
              placeholder="Konfirmasi Password User"
              error={!!errors.password_confirmation}
              hint={errors.password_confirmation?.message}
              {...register("password_confirmation")}
            />
          </div>

          <div>
            <Label htmlFor="role_id">Role</Label>
            <Select
              placeholder="-- Pilih Role --"
              className="dark:bg-dark-900"
              {...register("role_id", {
                valueAsNumber: true,
              })}
              error={!!errors.role_id}
              hint={errors.role_id?.message}
            >
              {roles.map((role) => (
                <option
                  key={role.id}
                  value={role.id}
                  className="text-gray-700 dark:bg-gray-900 dark:text-gray-400"
                >
                  {role.name}
                </option>
              ))}
            </Select>
          </div>

          <div className="flex justify-center sm:justify-end gap-4">
            <Link
              to={PATH.USERS}
              className="w-full sm:w-30 text-center rounded-lg bg-error-500 px-4 py-3 text-sm font-medium text-white transition shadow-theme-xs hover:bg-error-600"
            >
              Kembali
            </Link>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full sm:w-30 rounded-lg bg-brand-500 px-4 py-3 text-sm font-medium text-white transition shadow-theme-xs hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-brand-500"
            >
              {isSubmitting ? "Loading..." : "Simpan"}
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserEditForm;
