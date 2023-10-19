import React, { useState } from 'react'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
import { HiOutlineDesktopComputer, HiOutlineShoppingCart, HiUser } from 'react-icons/hi'
import { TbBrand4Chan } from 'react-icons/tb'
import { AiOutlineBgColors } from 'react-icons/ai'
import { HiClipboardList } from 'react-icons/hi'
import { LiaBlogSolid } from 'react-icons/lia'
import { MdProductionQuantityLimits, MdOutlineCategory } from 'react-icons/md'
import { ImBlog } from 'react-icons/im'
import { SiRoamresearch } from 'react-icons/si'
import { FaShopify } from 'react-icons/fa'
import { Layout, Menu, Button, theme } from 'antd'
import { useNavigate } from 'react-router-dom'
const { Header, Sider, Content } = Layout

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false)
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const navigate = useNavigate()

  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className='logo'>
          <h2 className='text-white fs-5 text-center py-3 mb-0'>
            <span className='sm-logo'>DS</span>
            <span className='lg-logo'>DigiShop</span>
          </h2>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          onClick={({ key }) => {
            if (key === 'signout') {

            } else {
              navigate(key)
            }
          }}
          items={[
            {
              key: '',
              icon: <HiOutlineDesktopComputer className='fs-4' />,
              label: 'Dashboard',
            },
            {
              key: 'customers',
              icon: <HiUser className='fs-4' />,
              label: 'Customers',
            },
            {
              key: 'catalog',
              icon: <HiOutlineShoppingCart className='fs-4' />,
              label: 'Catalog',
              children: [
                {
                  key: 'product',
                  icon: <MdProductionQuantityLimits className='fs-4' />,
                  label: 'Add Product'
                },
                {
                  key: 'product-list',
                  icon: <MdProductionQuantityLimits className='fs-4' />,
                  label: 'Product List'
                },
                {
                  key: 'brand',
                  icon: <TbBrand4Chan className='fs-4' />,
                  label: 'Brand'
                },
                {
                  key: 'brand-list',
                  icon: <TbBrand4Chan className='fs-4' />,
                  label: 'Brand List'
                },
                {
                  key: 'category',
                  icon: <MdOutlineCategory className='fs-4' />,
                  label: 'Category'
                },
                {
                  key: 'category-list',
                  icon: <MdOutlineCategory className='fs-4' />,
                  label: 'Category List'
                },
                {
                  key: 'color',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color'
                },
                {
                  key: 'color-list',
                  icon: <AiOutlineBgColors className='fs-4' />,
                  label: 'Color List'
                },
              ]
            },
            {
              key: 'orders',
              icon: <HiClipboardList className='fs-4' />,
              label: 'Orders',
            },
            {
              key: 'blog',
              icon: <LiaBlogSolid className='fs-4' />,
              label: 'Blog',
              children: [
                {
                  key: 'blog',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog',
                },
                {
                  key: 'blog-list',
                  icon: <LiaBlogSolid className='fs-4' />,
                  label: 'Blog List',
                },
                {
                  key: 'blog-category',
                  icon: <ImBlog className='fs-4' />,
                  label: 'Add Blog Category',
                },
                {
                  key: 'blog-category-list',
                  icon: <LiaBlogSolid className='fs-4' />,
                  label: 'Blog Category List',
                },
              ]
            },
            {
              key: 'enquiries',
              icon: <SiRoamresearch className='fs-4' />,
              label: 'Enquiries',
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  )
}
export default MainLayout