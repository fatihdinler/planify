import React from 'react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from '@chakra-ui/react'

const BreadCrumb = ({ items }) => {
  return (
    <div className='breadcrumb py-4 mb-0'>
      <div className='container-xxl'>
        <div className='row'>
          <div className='col-12'>
            <Breadcrumb separator="›">
              {items.map((item, index) => (
                <BreadcrumbItem key={index} isCurrentPage={item.isActive}>
                  <BreadcrumbLink href={item.link}>{item.content}</BreadcrumbLink>
                </BreadcrumbItem>
              ))}
            </Breadcrumb>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BreadCrumb