import React from 'react'

const Color = ({ colors }) => {
  return (
    <ul className='colors ps-0'>
      {
        Array.isArray(colors) && colors.map(color => (
          typeof color === 'string' && <li style={{ backgroundColor: color }} ></li>
        ))
      }
    </ul>
  )
}

export default Color