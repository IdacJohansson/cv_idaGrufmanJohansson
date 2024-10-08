import React from 'react'
import Image from 'next/image'
import imageIda from '../public/images/ida.jpg'

const ImageIda = () => {
  return (
    <Image
      src= {imageIda}
      width={250}
      height={300}
      alt="Picture of Ida"
    />
  )
}

export default ImageIda
