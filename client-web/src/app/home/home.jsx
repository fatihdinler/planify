import React from 'react'
import { Image, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <section className='home-wrapper-primary py-5'>
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-6'>
              <div className='main-banner position-relative'>
                <Image
                  src='images/main-banner-1.jpg'
                  alt='main banner'
                  className='img-fluid rounded-5'
                />
                <div className='main-banner-content position-absolute '>
                  <Text as='h4'>SUPERCHARGED FOR PROS.</Text>
                  <Text as='h5'>iPad S13+ pro.</Text>
                  <Text as='p'>
                    From $999.00 or $41.62/mo. <br /> for 24 mo.
                  </Text>
                  <Link>
                    <Button
                      colorScheme='teal'
                      variant='outline'
                      _hover={{
                        backgroundColor: 'var(--color-orange)',
                        color: 'white',
                        borderColor: 'var(--color-orange)'
                      }}
                    >
                      BUY NOW
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className='col-6'>
              <div className='d-flex flex-wrap gap-10 justify-content-between align-items-center'>
                <div className='small-banner position-relative'>
                  <Image
                    src='images/catbanner-01.jpg'
                    alt='main banner'
                    className='img-fluid rounded-5'
                  />
                  <div className='small-banner-content position-absolute'>
                    <Text as='h4'>Best Sale</Text>
                    <Text as='h5'>Laptops Max</Text>
                    <Text as='p'>
                      From $1699.00 or <br /> $64.62/mo. for 24 mo.
                    </Text>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <Image
                    src='images/catbanner-02.jpg'
                    alt='main banner'
                    className='img-fluid rounded-5'
                  />
                  <div className='small-banner-content position-absolute'>
                    <Text as='h4'>15%  Off</Text>
                    <Text as='h5'>SmartWatch 7</Text>
                    <Text as='p'>
                      Shop the latest band <br /> styles and colors.
                    </Text>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <Image
                    src='images/catbanner-03.jpg'
                    alt='main banner'
                    className='img-fluid rounded-5'
                  />
                  <div className='small-banner-content position-absolute'>
                    <Text as='h4'>New Arrival</Text>
                    <Text as='h5'>Buy iPad Air</Text>
                    <Text as='p'>
                      From $599.00 or <br /> $49.91/mo. for 12 mo. *
                    </Text>
                  </div>
                </div>

                <div className='small-banner position-relative'>
                  <Image
                    src='images/catbanner-04.jpg'
                    alt='main banner'
                    className='img-fluid rounded-5'
                  />
                  <div className='small-banner-content position-absolute'>
                    <Text as='h4'>Free Engraving</Text>
                    <Text as='h5'>AirPods Max</Text>
                    <Text as='p'>
                      High Fidelity playback & <br /> ultra-low distortion
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-secondary py-5'>

      </section>
    </div>
  )
}

export default Home