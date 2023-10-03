import React from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Text, Image } from '@chakra-ui/react'
import Watch from '../../shared/images/watch.jpg'
const Cart = () => {
  return (
    <div>
      <Helmet
        title='Your Cart'
      />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Cart', link: '/cart', isActive: true }
        ]}
      />

      <section className='cart-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='cart-header py-3 d-flex justify-content-between align-items-center'>
                <Text as='h4'>Product</Text>
                <Text as='h4'>Price</Text>
                <Text as='h4'>Quantity</Text>
                <Text as='h4'>Total</Text>
              </div>

              <div className='cart-data py-3 d-flex justify-content-between align-items-center'>
                <div className='cart-col-1 d-flex align-items-center'>
                  <div className='w-25'>
                    <Image 
                      src={Watch}
                      alt='product-image'
                    />
                  </div>
                  <div className='w-75'>
                    <Text as='h4'>Lorem Ipsum</Text>
                    <Text as='h6'>lorem ipsum</Text>
                    <Text as='h6'>lorem lorem</Text>
                  </div>
                </div>
                <div className='cart-col-2'>

                </div>
                <div className='cart-col-3'>

                </div>
                <div className='cart-col-4'>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Cart