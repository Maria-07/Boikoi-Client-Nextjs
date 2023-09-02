import AdminLayout from "@/component/Layouts/AdminLayout";
import React from "react";

const adminPanel = () => {
  return <div>Admin</div>;
};

export default adminPanel;

adminPanel.getLayout = function getLayout(page) {
  return <AdminLayout>{page}</AdminLayout>;
};
