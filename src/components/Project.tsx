import React from 'react';
import Card from './Card';
const data = [
    {
      id: 0,
      title: 'Clock',
      description: 'This is project 1',
      image: '/project01.png',
      tags: ['HTML', 'CSS', 'JavaScript']

    },
    {
      id: 1,
      title: 'ID Card',
      description: 'This is project 2',
      image: '/project02.png',
      tags: ['Next.JS', 'Node.js', 'TailwindCSS']
    },
    {
      id: 2,
      title: 'Digital Clock',
      description: 'This is project 3',
      image: '/project03.png',
      tags: ['Next.JS', 'Node.js', 'TailwindCSS']
    },
    {
      id: 3,
      title: 'Tip Calculator',
      description: 'This is project 4',
      image: '/project04.png',
      tags: ['Next.js', 'Node.js', 'TailwindCSS']
    },
    {
      id: 4,
      title: 'Password Generator',
      description: 'This is project 5',
      image: '/project05.png',
      tags: ['Next.js', 'Node.js', 'TailwindCSS']
    },
    {
      id: 5,
      title: 'BMI Calculator',
      description: 'This is project 6',
      image: '/project06.png',
      tags: ['Next.js', 'Node.js', 'TailwindCSS']            
    },
    {
      id: 6,
      title: 'TODO APP',
      description: 'This is project 7',
      image: '/project07.png',
      tags: ['NEXT.JS', 'Node.js', 'TailwindCSS']
    },
    {
      id: 7,
      title: 'Number Guessing Game',
      description: 'This is project 8',
      image: '/project08.png',
      tags: ['NEXT.JS', 'Node.js', 'TailwindCSS']
    },
    {
      id: 8,
      title: 'Calendar',
      description: 'This is project 9',
      image: '/project09.png',
      tags: ['HTML', 'CSS', 'JavaScript']
    }
]
const Project = () => {
  return (
    <div id='projects' className='container hover:text-[orange] hover:underline mt-40' data-aos="flip-left">
     <h1 className="text-5xl text-center mb-40">'My Projects'</h1>
     <div className='grid gap-10 xl:gap-x-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>  
       {data.map((el) => (<Card 
       key={el.id}
       title={el.title}
       description={el.description}
       image={el.image}
       tags={el.tags} 
       />))}
      
    </div>
    </div>
  )
}

export default Project