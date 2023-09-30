import React from 'react'
import { Image, Text, Button, Progress } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import ReactStars from 'react-rating-stars-component'
import tab1 from '../../shared/images/tab1.jpg'

const SpecialProductCard = () => {
  return (
    <div className='col-6 mb-4'>
      <div className='special-product-card rounded-5'>
        <div className='d-flex justify-content-between'>
          <div className='align-self-center'>
            <Image
              src={tab1}
              alt='watch'
              className='img-fluid'
            />
          </div>
          <div className='special-product-content'>
            <Text as='h5' className='brand'>
              Havels
            </Text>
            <Text as='h6' className='title'>
              Samsung Galaxy Note10+ Mobile Phone
            </Text>
            <ReactStars
              count={5}
              size={24}
              value={4.5}
              edit={false}
              activeColor='teal'
            />
            <Text as='p' className='price mt-3'>
              <span className='text-danger'>$2199.00</span>
              &nbsp;
              <strike>$2999.00</strike>
            </Text>

            <div className='discount-till d-flex align-items-center gap-10'>
              <Text as='p' className='remaining-day mb-0'>5 days</Text>
              <div className='d-flex gap-10 align-items-center'>
                <span className='badge rounded-circle p-3 bg-danger '>1</span>:
                <span className='badge rounded-circle p-3 bg-danger '>1</span>:
                <span className='badge rounded-circle p-3 bg-danger '>1</span>
              </div>
            </div>
            <div className='product-count mt-3'>
              <Text>Products: 4</Text>
              <Progress
                value={64}
                colorScheme='teal'
                size='sm'
              />
            </div>
            <Link>
              <Button colorScheme='teal' variant='outline' className='mt-3'>
                Add to Cart
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SpecialProductCard