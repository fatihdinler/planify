import React from 'react'
import Marquee from 'react-fast-marquee'
import { Image } from '@chakra-ui/react'
import brand01 from '../../shared/images/brand-01.png'
import brand02 from '../../shared/images/brand-02.png'
import brand03 from '../../shared/images/brand-03.png'
import brand04 from '../../shared/images/brand-04.png'
import brand05 from '../../shared/images/brand-05.png'
import brand06 from '../../shared/images/brand-06.png'
import brand07 from '../../shared/images/brand-07.png'
import brand08 from '../../shared/images/brand-08.png'

const FastMarquee = () => {
  return (
    <Marquee gradient className='d-flex'>
      <div className='mx-4 w-50'>
        <Image src={brand01} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand02} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand03} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand04} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand05} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand06} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand07} alt='brand'/>
      </div>

      <div className='mx-4 w-50'>
        <Image src={brand08} alt='brand'/>
      </div>
    </Marquee>
  )
}

export default FastMarquee