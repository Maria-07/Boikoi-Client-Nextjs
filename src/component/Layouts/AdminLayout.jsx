import { Layout, theme } from "antd";
import { useState } from "react";
import Sidebar from "../UI/Admin/Sidebar/Sidebar";
import AdminNavbar from "../UI/Layouts/AdminNavbar";
const { Content, Footer, Sider } = Layout;

const AdminLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Layout
        style={{
          minHeight: "100vh",
        }}
      >
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <Sidebar></Sidebar>
        </Sider>
        <Layout>
          <div>
            <AdminNavbar></AdminNavbar>
          </div>
          <Content
            style={{
              margin: "24px 16px",
            }}
          >
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
              }}
            >
              {children}
            </div>
          </Content>
          <Footer
            style={{
              textAlign: "center",
            }}
          >
            Ant Design ©2023 Created by Ant UED
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminLayout;
