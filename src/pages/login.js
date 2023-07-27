import RootLayout from "@/component/Layouts/RootLayout";

const LoginPage = () => {
  return <div>LoginPage</div>;
};

export default LoginPage;

LoginPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
