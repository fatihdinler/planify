import React, { useState } from 'react'
import { Breadcrumb, Helmet, ProductCard, Color } from '../../components'
import { Text, Checkbox, Stack, Input, InputGroup, InputLeftAddon, Image, Select } from '@chakra-ui/react'
import ReactStars from 'react-rating-stars-component'

const Store = () => {

  const [grid, setGrid] = useState(4)

  const onGridChange = (value) => {
    setGrid(value)
  }

  return (
    <div>
      <Helmet title='Our Store' />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Store', link: '/store', isActive: true },
        ]}
      />
      <div className='store-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-3'>

              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Shop By Categories</Text>
                <ul>
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Camera</li>
                  <li>Laptop</li>
                </ul>
              </div>

              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Filter By</Text>
                <div>
                  <Text as='h5' className='sub-title'>Availability</Text>
                  <Stack>
                    <Checkbox
                      colorScheme='teal'
                      className='checkbox-item'
                      size={'md'}>
                      In Stock (2)
                    </Checkbox>
                    <Checkbox
                      colorScheme='teal'
                      className='checkbox-item'
                      size={'md'}>
                      Out of Stock (0)
                    </Checkbox>
                  </Stack>

                  <Text as='h5' className='sub-title'>Price</Text>
                  <Stack direction='row'>
                    <InputGroup size='sm'>
                      <InputLeftAddon children='₺' />
                      <Input type='number' placeholder='From' />
                    </InputGroup>

                    <InputGroup size='sm'>
                      <InputLeftAddon children='₺' />
                      <Input type='number' placeholder='To' />
                    </InputGroup>
                  </Stack>

                  <Text as='h5' className='sub-title'>Colors</Text>
                  <div>
                    <Color
                      colors={[
                        'red',
                        'yellow',
                        'purple',
                        'blue',
                        'gray',
                        'black',
                        'green',
                        'orange',
                        'pink',
                        'brown',
                        'cyan',
                        'magenta',
                        'lime',
                        'teal',
                        'indigo',
                      ]}
                    />
                  </div>

                  <Text as='h5' className='sub-title'>Size</Text>
                  <Stack>
                    <Checkbox
                      colorScheme='teal'
                      className='checkbox-item'
                      size={'md'}>
                      Small (2)
                    </Checkbox>
                    <Checkbox
                      colorScheme='teal'
                      className='checkbox-item'
                      size={'md'}>
                      Medium (9)
                    </Checkbox>
                  </Stack>
                </div>
              </div>

              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Product Tags</Text>
                <div className='product-tags d-flex flex-wrap align-items-center gap-10'>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Headphone
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Laptops
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Mobile
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Speakers
                  </span>
                  <span className='badge bg-light text-secondary rounded-3 py-2 px-3'>
                    Tablets
                  </span>
                </div>
              </div>

              <div className='filter-card rounded-3 mb-3'>
                <Text as='h3' className='filter-title'>Random Products</Text>
                <div className='random-products d-flex'>
                  <div className='w-25'>
                    <Image
                      src='images/watch.jpg'
                      alt='random product'
                      className='img-fluid'
                    />
                  </div>
                  <div className='w-75'>
                    <Text as='h5'>
                      Kids watches bulk 10 packs multi colored for students
                    </Text>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='teal'
                      classNames='stars'
                    />
                    <Text as='p'>$299</Text>
                  </div>
                </div>

                <div className='random-products d-flex'>
                  <div className='w-25'>
                    <Image
                      src='images/watch.jpg'
                      alt='random product'
                      className='img-fluid'
                    />
                  </div>
                  <div className='w-75'>
                    <Text as='h5'>
                      Kids watches bulk 10 packs multi colored for students
                    </Text>
                    <ReactStars
                      count={5}
                      size={24}
                      value={3}
                      edit={false}
                      activeColor='teal'
                      classNames='stars'
                    />
                    <Text as='p'>$299</Text>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-9'>
              <div className='filter-sort-grid rounded-3 mb-4'>
                <div className='d-flex justify-content-between align-items-center'>
                  <div className='d-flex align-items-center gap-10'>
                    <Text
                      as='p'
                      className='mb-0 d-block' style={{ width: '100px' }}>Sort By</Text>
                    <Select placeholder='Select option'>
                      <option value='option1'>Featured</option>
                      <option value='option2'>Best Selling</option>
                      <option value='option3'>Alphabetically A, Z</option>
                      <option value='option3'>Alphabetically Z, A</option>
                      <option value='option3'>Price, Low to High</option>
                      <option value='option3'>Price, High to Low</option>
                      <option value='option3'>Date, New to Old</option>
                      <option value='option3'>Date, Old to New</option>
                    </Select>
                  </div>

                  <div className='d-flex align-items-center gap-10'>
                    <Text as='p' className='total-product-counter mb-0'>21 Products</Text>
                    <div className='grid d-flex gap-10 align-items-center'>
                      <Image
                        src='images/gr4.svg'
                        alt='grid'
                        className='d-block img-fluid'
                        onClick={() => setGrid(3)}
                      />
                      <Image
                        src='images/gr3.svg'
                        alt='grid'
                        className='d-block img-fluid'
                        onClick={() => setGrid(4)}
                      />
                      <Image
                        src='images/gr2.svg'
                        alt='grid'
                        className='d-block img-fluid'
                        onClick={() => setGrid(6)}
                      />
                      <Image
                        src='images/gr.svg'
                        alt='grid'
                        className='d-block img-fluid'
                        onClick={() => setGrid(12)}
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className='products-list pb-5'>
                <div className='d-flex gap-10 flex-wrap'>
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Store