import React from 'react'

const Img = ({src, srcSet01, srcSet02, className, alt}) => {
  return  <img src={src} srcSet={`${srcSet01} 2x, ${srcSet02} 3x`} className={className} alt={alt} />
}

export default Img