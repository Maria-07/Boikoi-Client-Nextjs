import RootLayout from "@/component/Layouts/RootLayout";

const SignUpPage = () => {
  return <div>SignUpPage</div>;
};

export default SignUpPage;

SignUpPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
