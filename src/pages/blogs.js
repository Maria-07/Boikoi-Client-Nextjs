import RootLayout from "@/component/Layouts/RootLayout";

const BlogPage = () => {
  return <div>this is BlogPage</div>;
};

export default BlogPage;

BlogPage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
