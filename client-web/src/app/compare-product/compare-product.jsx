import React from 'react'
import { Helmet, Breadcrumb, CompareProductCard } from '../../components'

const CompareProduct = () => {
  return (
    <div>
      <Helmet title='Compare Products' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Compare Products', link: '/compare-products', isActive: true },
        ]}
      />
      <div className='compare-products-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <CompareProductCard />
            </div>

            <div className='col-3'>
              <CompareProductCard />
            </div>

            <div className='col-3'>
              <CompareProductCard />
            </div>

            <div className='col-3'>
              <CompareProductCard />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareProduct