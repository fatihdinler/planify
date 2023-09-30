import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Text, Heading, Input, InputRightElement, InputGroup, Image, Menu, MenuButton, MenuList, MenuItem, Button, Flex } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'
import compare from '../../shared/images/compare.svg'
import wishlist from '../../shared/images/wishlist.svg'
import user from '../../shared/images/user.svg'
import cart from '../../shared/images/cart.svg'


const Header = () => {
  return (
    <div>
      <header className='header-top-strip py-3'>
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-6'>
              <Text className='text-white mb-0'>
                Free Shipping Over $100 & Free Returns
              </Text>
            </div>

            <div className='col-6'>
              <Text className='text-end text-white mb-0'>
                Hotline: <a className='text-white' href='tel:+90 546 881 24 26'>(+90) 538 853 38 95</a>
              </Text>
            </div>
          </div>
        </div>
      </header>

      <header className='header-upper py-3'>
        <div className='container-xxl'>
          <div className='row align-items-center py-1'>
            <div className='col-2'>
              <Heading as='h2' size='xl' className='text-white'>
                <Link to='/'>DigiShop</Link>
              </Heading>
            </div>

            <Flex className='col-5' alignItems='center'>
              <InputGroup className='input-group'>
                <Input
                  type='tel'
                  className='bg-white'
                  placeholder='Search Product'
                  size='md'
                />
                <InputRightElement>
                  <Button
                    size='md'
                    bg='teal'
                    color='white'
                    _hover={{
                      backgroundColor: 'var(--color-orange)',
                      color: 'white',
                      borderColor: 'var(--color-orange)'
                    }}
                  >
                    <BsSearch color='gray.300' />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>

            <div className='col-5 align-items-center'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link
                    to='/compare-product'
                    className='d-flex align-items-center gap-10'>
                    <Image src={compare} alt='compare' />
                    <Text className='text-white mb-0' fontSize='small'>
                      Compare
                      <br />
                      Products
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link
                    to='/wishlist'
                    className='d-flex align-items-center gap-10'>
                    <Image src={wishlist} alt='wishlist' />
                    <Text className='text-white mb-0' fontSize='small'>
                      Favourite
                      <br />
                      Wishlist
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link 
                    to='/sign-in'
                    className='d-flex align-items-center gap-10'>
                    <Image src={user} alt='user' />
                    <Text className='text-white mb-0' fontSize='small'>
                      Login
                      <br />
                      My Account
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <Image src={cart} alt='cart' />
                    <div className='d-flex flex-column gap-1'>
                      <span className='badge bg-white text-dark '>
                        0
                      </span>
                      <Text className='text-white mb-0 '>$ 500</Text>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header className='header-bottom py-3'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <div className='menu-bottom d-flex align-items-center gap-30'>
                <div>
                  <Menu className='dropdown'>
                    <MenuButton
                      as={Button}
                      className='btn dropdown-toggle d-flex flex-row align-items-center gap-15'>
                      <span>Shop Categories</span>
                    </MenuButton>
                    <MenuList>
                      <Link to='/contact' className='d-flex'>
                        <MenuItem>
                          Action
                        </MenuItem>
                      </Link>
                      <Link to='/contact' className='d-flex'>
                        <MenuItem>
                          Action
                        </MenuItem>
                      </Link>
                      <Link to='/contact' className='d-flex'>
                        <MenuItem>
                          Action
                        </MenuItem>
                      </Link>
                    </MenuList>
                  </Menu>
                </div>

                <div className='menu-links'>
                  <div className='d-flex align-items-center gap-15'>
                    <NavLink to='/'>
                      Home
                    </NavLink>
                    <NavLink to='/store'>
                      Our Store
                    </NavLink>
                    <NavLink to='/blog'>
                      Blogs
                    </NavLink>
                    <NavLink to='/contact'>
                      Contact
                    </NavLink>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Header