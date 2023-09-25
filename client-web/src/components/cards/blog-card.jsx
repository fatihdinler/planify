import React from 'react'
import { Image, Text, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
    <div className='blog-card rounded-5'>
      <div className='card-image'>
        <Image
          src='images/blog-1.jpg'
          alt='blog'
          className='img-fluid rounded-top-5 w-100'
        />
      </div>
      <div className='blog-content'>
        <Text as='p' className='date'>
          21 September, 2023
        </Text>
        <Text as='h5' className='title'>
          A beautiful sunday morning renaissance
        </Text>
        <Text as='p' className='description'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </Text>

        <Link to=''>
          <Button colorScheme='teal' variant='outline'>
            Read More
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard