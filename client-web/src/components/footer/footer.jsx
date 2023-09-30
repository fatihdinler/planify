import React from 'react'
import { Text, Image, Input, InputGroup, InputRightElement, Button, List, ListItem, ListIcon } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { 
  LaptopIcon,
  TabletIcon,
  ContactIcon,
  HeadphonesIcon,
  WatchIcon,
  PrivacyIcon,
  DataUsageIcon,
  RefundIcon,
  InformationIcon,
  ShippingIcon,
  FAQIcon,
} from '../icons/icons'
import newsletter from '../../shared/images/newsletter.png'

const Footer = () => {
  return (
    <div>
      <footer className='footer py-4'>
        <div className='container-xxl'>
          <div className='row align-items-center'>
            <div className='col-5'>
              <div className='footer-top-data d-flex gap-30 align-items-center'>
                <Image
                  src={newsletter}
                  alt='newsletter'
                />
                <Text as='h2' className='mb-0'>Sign Up for Newsletter</Text>
              </div>
            </div>

            <div className='col-7'>
              <InputGroup className='input-group'>
                <Input
                  type='tel'
                  className='bg-white py-1'
                  placeholder='example@mail.com'
                  size='md'
                />
                <InputRightElement className='input-group-text py-2'>
                  <Button
                    colorScheme='teal'
                    size='md'
                    variant='solid'
                    rounded='none'>
                    Subscribe
                  </Button>
                </InputRightElement>
              </InputGroup>
            </div>

          </div>
        </div>
      </footer>

      <footer className='footer py-4'>
        <div className='container-xxl'>
          <div className='row'>

            <div className='col-3'>
              <div className='d-flex flex-column align-items-center'>
                <Text as='h4' className='mb-4'>Contact Us</Text>
                <address>
                  44 E. West Street Ashland, OH 44805
                </address>
              </div>
            </div>

            <div className='col-3'>
              <div className='d-flex flex-column align-items-center'>
                <Text as='h4' className='mb-4'>Information</Text>
                <div className='footer-links'>
                  <List className='footer-links-list'>
                    <Link to='/privacy-policy'>
                      <ListItem>
                        <ListIcon as={PrivacyIcon} />
                        Privacy Policy
                      </ListItem>
                    </Link>

                    <Link to='/refund-policy'>
                      <ListItem>
                        <ListIcon as={RefundIcon} />
                        Refund Policy
                      </ListItem>
                    </Link>

                    <Link to='/shipping-policy'>
                      <ListItem>
                        <ListIcon as={ShippingIcon} />
                        Shipping Policy
                      </ListItem>
                    </Link>

                    <Link to='/terms-condition-policy'>
                      <ListItem>
                        <ListIcon as={DataUsageIcon} />
                        Terms & Conditions
                      </ListItem>
                    </Link>

                  </List>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='d-flex flex-column align-items-center'>
                <Text as='h4' className='mb-4'>Account</Text>
                <div className='footer-links'>
                  <List className='footer-links-list'>
                    <Link>
                      <ListItem>
                        <ListIcon as={InformationIcon} />
                        About Us
                      </ListItem>
                    </Link>

                    <Link>
                      <ListItem>
                        <ListIcon as={FAQIcon} />
                        FAQ
                      </ListItem>
                    </Link>

                    <Link>
                      <ListItem>
                        <ListIcon as={ContactIcon} />
                        Contact
                      </ListItem>
                    </Link>

                  </List>
                </div>
              </div>
            </div>

            <div className='col-3'>
              <div className='d-flex flex-column align-items-center'>
                <Text as='h4' className='mb-4'>Quick Links</Text>
                <div className='footer-links'>
                  <List className='footer-links-list'>
                    <Link>
                      <ListItem>
                        <ListIcon as={LaptopIcon} />
                        Laptops
                      </ListItem>
                    </Link>

                    <Link>
                      <ListItem>
                        <ListIcon as={HeadphonesIcon} />
                        Headphones
                      </ListItem>
                    </Link>

                    <Link>
                      <ListItem>
                        <ListIcon as={TabletIcon} />
                        Tablets
                      </ListItem>
                    </Link>

                    <Link>
                      <ListItem>
                        <ListIcon as={WatchIcon} />
                        Watches
                      </ListItem>
                    </Link>
                  </List>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>

      <footer className='footer py-4'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12 text-center mb-0'>
              <Text>&copy; {new Date().getFullYear()}, Powered by Fatih Dinler.</Text>
            </div>
          </div>
        </div>
      </footer>

    </div>
  )
}

export default Footer