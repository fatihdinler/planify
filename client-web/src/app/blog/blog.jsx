import React from 'react'
import { Helmet, Breadcrumb, BlogCard } from '../../components'
import { Text } from '@chakra-ui/react'

const Blog = () => {
  return (
    <div>
      <Helmet title='Blog' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Blog', link: '/blog', isActive: true },
        ]}
      />
      <div className='blog-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-3'>
              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Find By Categories</Text>
                <ul>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>
            </div>

            <div className='col-9'>
              <div className='row'>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
                <div className='col-4 mb-5'>
                  <BlogCard />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blog