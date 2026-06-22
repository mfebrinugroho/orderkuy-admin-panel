import ComponentCard from "@/components/common/ComponentCard";
import PageBreadcrumb from "@/components/common/PageBreadCrumb";
import PageMeta from "@/components/common/PageMeta";
import TableUser from "@/components/table/users/TableUser";

const User = () => {
  return (
    <>
      <PageMeta
        title="Kelola User | OrderKuy"
        description="OrderKuy adalah platform kasir dan pemesanan digital yang membantu toko, restoran, dan UMKM mengelola menu, pesanan, pembayaran, pelanggan, dan operasional bisnis secara efisien."
      />
      <PageBreadcrumb pageTitle="Kelola User" />
      <div className="space-y-6">
        <ComponentCard
          title="Kelola Data User"
          desc="Kelola dan pantau data user"
        >
          <TableUser />
        </ComponentCard>
      </div>
    </>
  );
};

export default User;
