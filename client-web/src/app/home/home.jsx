import React from 'react'
import { Image, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { FastMarquee, BlogCard, ProductCard, SpecialProductCard } from '../../components'

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
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='services d-flex align-items-center justify-content-between '>
                <div className='d-flex align-items-center gap-10'>
                  <Image src='images/service.png' alt='services' />
                  <div>
                    <Text as='h6' className='mb-0'>Free Shipping</Text>
                    <Text as='p' className='mb-0'>From all orders of $5</Text>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <Image src='images/service-02.png' alt='services' />
                  <div>
                    <Text as='h6' className='mb-0'>Daily Surprise Offers</Text>
                    <Text as='p' className='mb-0'>Save up to 25% off</Text>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <Image src='images/service-03.png' alt='services' />
                  <div>
                    <Text as='h6' className='mb-0'>Support 24/7</Text>
                    <Text as='p' className='mb-0'>Shop with an expert</Text>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <Image src='images/service-04.png' alt='services' />
                  <div>
                    <Text as='h6' className='mb-0'>Affordable Prices</Text>
                    <Text as='p' className='mb-0'>Get factory default prices</Text>
                  </div>
                </div>
                <div className='d-flex align-items-center gap-15'>
                  <Image src='images/service-05.png' alt='services' />
                  <div>
                    <Text as='h6' className='mb-0'>Secure Payments</Text>
                    <Text as='p' className='mb-0'>100% protected payments</Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='categories d-flex flex-wrap justify-content-between align-items-center rounded-5'>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Music & Gaming</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/camera.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Cameras</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/camera.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Smart TV</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/tv.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Smart Watches</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/headphone.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Music & Gaming</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/camera.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Cameras</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/camera.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Smart TV</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/tv.jpg' alt='' />
                </div>

                <div className='d-flex gap-30 align-items-center '>
                  <div>
                    <Text as='h6'>Smart Watches</Text>
                    <Text as='p'>10 Items</Text>
                  </div>
                  <Image src='images/headphone.jpg' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='featured-wrapper home-wrapper-secondary py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <Text as='h3' className='section-heading'>
                Featured Collections
              </Text>
            </div>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </section>

      <section className='famous-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>
              <div className='famous-card rounded-5'>
                <div className='famous-content '>
                  <Text as='h5'>Big Screen</Text>
                  <Text as='h6'>Smart Watch Series 7</Text>
                  <Text as='p'>From $399 or $16.62/month for 24 month *</Text>
                </div>
                <Image
                  src='images/watch-01.jpeg'
                  alt='famous'
                  className='rounded-5'
                />
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card rounded-5'>
                <div className='famous-content '>
                  <Text as='h5'>Studio Displays</Text>
                  <Text as='h6'>600 nits of brightness</Text>
                  <Text as='p'>27-inch 5K Retina display with unbelievable light force</Text>
                </div>
                <Image
                  src='images/watch-01.jpeg'
                  alt='famous'
                  className='rounded-5'
                />
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card rounded-5'>
                <div className='famous-content '>
                  <Text as='h5'>Smartphones</Text>
                  <Text as='h6'>Smartphone 13 Pro</Text>
                  <Text as='p'>Now in Green, From $399 or $16.62/month for 24 month *</Text>
                </div>
                <Image
                  src='images/watch-01.jpeg'
                  alt='famous'
                  className='rounded-5'
                />
              </div>
            </div>

            <div className='col-3'>
              <div className='famous-card rounded-5'>
                <div className='famous-content '>
                  <Text as='h5'>Home Speakers</Text>
                  <Text as='h6'>Room Filling Sound</Text>
                  <Text as='p'>From $499 or $12.62/month for 6 months *</Text>
                </div>
                <Image
                  src='images/watch-01.jpeg'
                  alt='famous'
                  className='rounded-5'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='special-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <Text as='h3' className='section-heading'>
                Special Products
              </Text>
            </div>
          </div>

          <div className='row'>
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
            <SpecialProductCard />
          </div>
        </div>
      </section>

      <section className='popular-wrapper home-wrapper-secondary py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <Text as='h3' className='section-heading'>
                Our Popular Products
              </Text>
            </div>
            <div className='row'>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>
        </div>
      </section>

      <section className='marquee-wrapper py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='marquee-inner-wrapper card-wrapper bg-white p-3 rounded-5'>
                <FastMarquee />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='blog-wrapper home-wrapper-secondary py-5 '>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <Text as='h3' className='section-heading'>
                Our Latest Blogs
              </Text>
            </div>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </section>


    </div>
  )
}

export default Home