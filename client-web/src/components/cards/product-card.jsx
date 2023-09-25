import React from 'react'
import { Image, Text, Button } from '@chakra-ui/react'
import ReactStars from 'react-rating-stars-component'
import { Link, useLocation } from 'react-router-dom'

const ProductCard = ({grid}) => {

  const location = useLocation()
  console.log(location)
  return (
    <div className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}>
      <div className='product-card position-relative rounded-5'>
        <div className='wishlist-icon position-absolute '>
          <Link>
            <Image
              src='images/wish.svg'
            />
          </Link>
        </div>

        <div className='product-image'>
        <Image
            src='images/watch.jpeg'
            alt='product'
            className='img-fluid'
          />
          <Image
            src='images/watch-01.jpeg'
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
          <Text as='p' className='product-price'>
            $100
          </Text>
        </div>

        <div className='action-bar position-absolute '>
          <div className='d-flex flex-column gap-15'>
            <Link>
              <Image
                src='images/prodcompare.svg'
              />
            </Link>

            <Link>
              <Image
                src='images/view.svg'
              />
            </Link>

            <Link>
              <Image
                src='images/add-cart.svg'
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard