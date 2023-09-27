import React, { useState } from 'react'
import { Helmet, Breadcrumb } from '../../components'
import { Text, FormControl, FormLabel, Input, FormHelperText, Textarea, Button } from '@chakra-ui/react'

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    comment: '',
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
    <div>
      <Helmet
        title='Contact'
      />
      <Breadcrumb
        items={[
          { content: 'Home', link: '/', isActive: false },
          { content: 'Contact', link: '/contact', isActive: true }
        ]}
      />

      <div className='contact-wrapper home-wrapper-secondary py-5'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='col-12'>
              <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d730.1589838707828!2d29.134345524545278!3d40.95585712671249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac788d23ae66d%3A0x443d27c4db97245f!2sMarmara%20%C3%9Cniversitesi%20M%C3%BChendislik%20Fak%C3%BCltesi!5e0!3m2!1str!2str!4v1695845980924!5m2!1str!2str'
                width='600'
                height='450'
                className='border-0 w-100 rounded-5 map'
                allowfullscreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'>
              </iframe>
            </div>

            <div className='col-12 mt-5'>
              <div className='contact-inner-wrapper d-flex justify-content-between rounded-5'>
                <div>
                  <Text as='h3' className='contact-title'>Contact with us</Text>
                  <FormControl isRequired className='form-controller'>
                    <div>
                      <FormLabel>Name</FormLabel>
                      <Input
                        name='name'
                        placeholder='John Doe'
                        value={form.name}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <FormLabel>Email</FormLabel>
                      <Input
                        name='email'
                        type='email'
                        placeholder='johndoe@mail.com'
                        value={form.email}
                        onChange={handleInputChange}
                      />
                      <FormHelperText>We'll never share your e-mail address</FormHelperText>
                    </div>
                    <div>
                      <FormLabel>Phone Number</FormLabel>
                      <Input
                        name='phoneNumber'
                        type='tel'
                        placeholder='+90 (521) 528 84 13'
                        value={form.phoneNumber}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div>
                      <FormLabel>Comment</FormLabel>
                      <Textarea
                        name='comment'
                        value={!(form.name && form.email && form.phoneNumber) ? null : form.comment}
                        onChange={handleInputChange}
                        placeholder={`Please be kind while you're commenting 😋`}
                      />
                    </div>
                    <div>
                      <Button
                        colorScheme='teal'
                        variant='solid'
                        className='w-100'>
                          Submit
                      </Button>
                    </div>
                  </FormControl>
                </div>
                <div>
                  <Text as='h3' className='contact-title'>Get in touch with us</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact