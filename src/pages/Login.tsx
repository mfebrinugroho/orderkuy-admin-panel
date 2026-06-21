import PageMeta from "@/components/common/PageMeta";
import LoginForm from "@/components/form/auth/LoginForm";
import AuthLayout from "@/layouts/AuthPageLayout";

const Login = () => {
  return (
    <>
      <PageMeta
        title="OrderKuy - Login"
        description="OrderKuy is Application POS"
      />
      <AuthLayout>
        <LoginForm />
      </AuthLayout>
    </>
  );
};

export default Login;
