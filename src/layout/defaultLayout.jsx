import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content, Footer } = Layout;

export default () => (
    <Layout>
        <Sider>
            <Header>Header</Header>
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                nav 1
                </Menu.Item>
                <Menu.Item key="2" icon={<VideoCameraOutlined />}>
                nav 2
                </Menu.Item>
                <Menu.Item key="3" icon={<UploadOutlined />}>
                nav 3
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout>
            <Header>Header</Header>
            <Content>main content</Content>
            <Footer>footer</Footer>
        </Layout>
    </Layout>
);