import React from 'react'

const Skills = () => {
  return (
    <div id="skills" className='cotainer pt-3 text-center'>
        <div className='grid md:grid-col-2 gap-20 items-center m-28'>
        <div data-aos="zoom-in-up">
        <h1 className='text-5xl md:text-5 m-5 text-center hover:text-[orange] hover:underline'>SKILLS</h1>
          <h2 className='text-3xl md:text-5 m-10 text-center'>Technologies I work with</h2>
        <p className='text-xl'>I have a solid foundation in web development, specializing in HTML, CSS, JAVASCRIPT, TYPESCRIPT, NODE.JS, NEXT.JS, TAILWIND CSS</p>
        </div>
        <div>
          <div className='grid grid-cols-2 text-accent text-3xl sm:text-4x'>
            <div data-aos="zoom-in-up" className='space-y-2 items-center'>
              <h2>Taiwind CSS</h2>
              <h2>Node.JS</h2>
              <h2>React.JS</h2>
            </div>
            <div data-aos="zoom-in-up" className='space-y-2'>
              <h2>Typescript</h2>
              <h2>Next.JS</h2>
              <h2>JavaScript</h2>
            </div>
          </div>
        </div>
        </div>

    </div>
  )
}

export default Skills