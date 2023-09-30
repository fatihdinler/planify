import React from 'react'
import { Image, Text, Button } from '@chakra-ui/react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'
import watch from '../../shared/images/watch.jpeg'
import watch01 from '../../shared/images/watch-01.jpeg'
import wish from '../../shared/images/wish.svg'
import prodcompare from '../../shared/images/prodcompare.svg'
import view from '../../shared/images/view.svg'
import addcart from '../../shared/images/add-cart.svg'

const ProductCard = ({ grid }) => {

  const location = useLocation()
  console.log(location)
  return (
    <div className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}>
      <Link to='/store/store-detail/:id'>
        <div className='product-card position-relative rounded-5'>
          <div className='wishlist-icon position-absolute '>
            <Link>
              <Image
                src={wish}
              />
            </Link>
          </div>

          <div className='product-image'>
            <Image
              src={watch}
              alt='product'
              className='img-fluid'
            />
            <Image
              src={watch01}
              alt='product'
              className='img-fluid'
            />
          </div>

          <div className='product-details'>
            <Text as='h6' className='brand'>
              Havels
            </Text>
            <Text as='h5' className='product-title'>
              Kids Headphones bulk 10 pack multi colored for students
            </Text>
            <ReactStars
              count={5}
              size={24}
              value={3}
              edit={false}
              activeColor='teal'
            />
            <Text as='p' className={`product-description ${grid === 12 ? 'd-block' : 'd-none'}`}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Cum maxime mollitia magnam, excepturi nobis tempora officiis autem fuga, minima unde magni,
              incidunt suscipit et placeat corporis adipisci quasi quidem in?
            </Text>
            <Text as='p' className='product-price'>
              $100
            </Text>
          </div>

          <div className='action-bar position-absolute '>
            <div className='d-flex flex-column gap-15'>
              <Link>
                <Image
                  src={prodcompare}
                />
              </Link>

              <Link>
                <Image
                  src={view}
                />
              </Link>

              <Link>
                <Image
                  src={addcart}
                />
              </Link>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default ProductCard