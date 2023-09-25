import React from 'react'
import { Helmet, Breadcrumb } from '../../components'

const Contact = () => {
  return (
    <div>
      <Helmet 
        title='Contact'
      />
      <Breadcrumb 
        items={[
          {content: 'Home', link: '/', isActive: false},
          {content: 'Contact', link: '/contact', isActive: true }
        ]}
      />

    </div>
  )
}

export default Contact