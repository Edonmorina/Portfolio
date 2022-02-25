import React from 'react'
import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';


const SocialMedia = () => {
  return (
    <div className='app__social'>
        <a href='https://github.com/Edonmorina' target='_blank'><BsGithub /></a>
        <a href='https://www.linkedin.com/in/edon-morina/' target='_blank'><BsLinkedin /></a>
    </div>
  )
}

export default SocialMedia