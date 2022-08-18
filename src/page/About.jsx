import React from 'react'

import {GiClick} from 'react-icons/gi'
import {BsSearch} from 'react-icons/bs'



function About() {
  return (
    <div className='about'>
      <h1>Github Search <BsSearch/></h1>
      <p>You can view your Github profile and search for any gihub profile just with a click. <GiClick/><br /> 
      </p>
    </div>
  )
}

export default About