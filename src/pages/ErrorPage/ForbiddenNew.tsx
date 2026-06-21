import { Link } from "react-router";
import PageMeta from "@/components/common/PageMeta";
import { ShieldX } from "lucide-react";

export default function ForbiddenNew() {
  return (
    <>
      <PageMeta
        title="React.js 404 Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js 404 Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="flex min-h-screen items-center justify-center bg-slate-50 px-6">
        <div className="max-w-md text-center">
          <div className="mb-6 flex justify-center">
            <ShieldX className="h-20 w-20 text-red-500" />
          </div>

          <h1 className="mb-2 text-6xl font-bold text-slate-900">403</h1>

          <h2 className="mb-4 text-2xl font-semibold text-slate-800">
            Akses Ditolak
          </h2>

          <p className="mb-8 text-slate-600">
            Anda tidak memiliki izin untuk mengakses halaman ini.
          </p>

          <Link
            to="/"
            className="inline-flex items-center rounded-lg bg-emerald-600 px-5 py-3 font-medium text-white transition hover:bg-emerald-700"
          >
            Kembali ke Dashboard
          </Link>
        </div>
      </div>
    </>
  );
}
