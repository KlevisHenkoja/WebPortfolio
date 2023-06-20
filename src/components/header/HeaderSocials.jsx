import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGit} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socails'>
        <a href="https://linkedin.com/in/klevis-hënkoja-b511a323a/" target='_blank'><BsLinkedin/></a>
        <a href="https://github.com/KlevisHenkoja" target='_blank'><BsGit/></a>
        
    </div>
  )
}

export default HeaderSocials