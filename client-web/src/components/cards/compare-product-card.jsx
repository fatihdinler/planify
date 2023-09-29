import React from 'react'
import { Text, Image, Badge } from '@chakra-ui/react'
import { Color } from '../../components'

const CompareProductCard = () => {
  return (
    <div className='compare-product-card position-relative rounded-5'>
      <Image
        src='images/cross.svg'
        alt='cross'
        className='position-absolute cross img-fluid '
      />

      <div className='product-card-image'>
        <Image
          src='images/watch-01.jpeg'
          alt='product-compare'
        />
      </div>

      <div className='compare-product-details'>
        <Text as='h5' className='title'>
          Honor T1 7.0 1 GB RAM ROM 7 Inch With Wi-Fi+3G Tablet
        </Text>
        <Text as='h6' className='price'>
          $100
        </Text>

        <div>
          <div className='product-detail'>
            <Text as='h5' className='mb-0'>Brand: </Text>
            <Text as='p'>Havels</Text>
          </div>

          <div className='product-detail'>
            <Text as='h5' className='mb-0'>Type: </Text>
            <Badge colorScheme='green'>Watch</Badge>
          </div>

          <div className='product-detail'>
            <Text as='h5' className='mb-0'>Availability: </Text>
            <Badge colorScheme='blue'>In Stock</Badge>
          </div>

          <div className='product-detail'>
            <Text as='h5' className='mb-0'>Color: </Text>
            <Color
              colors={[
                'red',
                'purple',
                'blue',
                'cyan'
              ]}
            />
          </div>

          <div className='product-detail'>
            <Text as='h5' className='mb-0'>Size: </Text>
            <div className='d-flex gap-10'>
              <Badge colorScheme='green'>S</Badge>
              <Badge colorScheme='purple'>M</Badge>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CompareProductCard