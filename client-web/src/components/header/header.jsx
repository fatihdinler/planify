import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Text, Heading, Input, InputRightElement, InputGroup, Image, Menu, MenuButton, MenuList, MenuItem, Button, Flex } from '@chakra-ui/react'
import { BsSearch } from 'react-icons/bs'

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
                  >
                    <BsSearch color='gray.300' />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Flex>

            <div className='col-5 align-items-center'>
              <div className='header-upper-links d-flex align-items-center justify-content-between'>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <Image src='images/compare.svg' alt='compare' />
                    <Text className='text-white mb-0' fontSize='small'>
                      Compare
                      <br />
                      Products
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <Image src='images/wishlist.svg' alt='wishlist' />
                    <Text className='text-white mb-0' fontSize='small'>
                      Favourite
                      <br />
                      Wishlist
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <Image src='images/user.svg' alt='user' />
                    <Text className='text-white mb-0' fontSize='small'>
                      Login
                      <br />
                      My Account
                    </Text>
                  </Link>
                </div>
                <div>
                  <Link className='d-flex align-items-center gap-10'>
                    <Image src='images/cart.svg' alt='cart' />
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
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/'>Our Store</NavLink>
                    <NavLink to='/'>Blogs</NavLink>
                    <NavLink to='/contact'>Contact</NavLink>
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