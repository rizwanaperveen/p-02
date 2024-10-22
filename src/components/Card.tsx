import React from 'react'
import Image from 'next/image'


interface propsType {
  title: string
  description: string
  image: string
  tags: string[];
}
const Card: React.FC<propsType> = ({title, description, image, tags}) => {
  return (
    <div className='border border-accent w-[350px] sm:w-[350px]' data-aos="flip-left">
<div>
  <Image className="w-[350px] sm:w-[350px]"
  src={image}
  width={350}
  height={350}
   alt={title} 
   />
</div>
<div className='p-4 space-y-4'>
  <div className='text-4xl font-extralight'>{title}</div>
  <div>{description}</div>
  <div>
    {tags.map((el) => (<div className='tags' key={el}>
     {el}
    </div>
      
    ))}
  </div>
</div>
    </div>
  )
}

export default Card