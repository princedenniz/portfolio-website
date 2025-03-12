import React from 'react'
import "./Header.css"
import {profile1} from "../../assets"
import CodeBlock from '../../ui/CodeBlock';
import Facts from '../../ui/Facts';
import SocialHandles from '../../ui/SocialHandles';
import BreathCircle from "../../ui/BreathCircle"

const code =   `const developer = {
firstName:"Dennis", 
lastName: "Chukwumere", 
aka: "DEV", 
hobby:repeat = ()=> {
  //eat(); 
  // //sleep(), 
  // //code(); 
  // //repeat();
  // 
}`


const Header = () => {
  return (
    <header id='header'>
      <BreathCircle/>
      <div className='section__wrapper'>
        <div className='grid upper'>
          <div className='idea-txt'>
            {/* <HeaderTitle/> */}
            <h1>Bringing Ideas to life </h1>
            <h1>with Code and Creativity</h1>
          </div>
          <div className='column'>
            <img src={profile1} alt="" className='profile__photo'/>
          </div>
        </div>
        <div className='card grid lower'>
          <CodeBlock language={"Javascript"} code={code}/>
       <div>
        <p className='text__muted description'>
          I dessect intricate user experience challenges to engineer integrity-focused solutions that resonate with billions of users.
        </p>
        <Facts/>
        <SocialHandles/>

       </div>
        </div>
      </div>
    </header>
  )
}

export default Header;