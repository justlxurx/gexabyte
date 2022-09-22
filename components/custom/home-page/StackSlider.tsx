import Image from 'next/image'
import React from 'react'

let icons = [
  '/icons/techstack/angular-icon 1.svg',
  '/icons/techstack/bunny-color 1.svg',
  '/icons/techstack/Ellipse 55.svg',
  '/icons/techstack/g3476.svg',
  '/icons/techstack/Group 1958.svg',
  '/icons/techstack/Group 2285.svg',
  '/icons/techstack/Group 2575.svg',
  '/icons/techstack/Group 2576.svg',
  '/icons/techstack/python.svg',
  '/icons/techstack/Group 3180.svg',
  '/icons/techstack/Group.svg',
  '/icons/techstack/java 1.svg',
  '/icons/techstack/js.svg',
  '/icons/techstack/Kotlin_Icon.svg',
  '/icons/techstack/MetaMask_Fox 1.svg',
  '/icons/techstack/react-2 1.svg',
  '/icons/techstack/Rust_programming_language_black_logo.svg',
  '/icons/techstack/Solidity_logo 1.svg',
  '/icons/techstack/Typescript_logo_2020.svg',
  '/icons/techstack/Vector-1.svg',
  '/icons/techstack/Vector.svg',
  '/icons/techstack/velas-vlx-logo 1.svg',
  '/icons/techstack/vue-9 1.svg',
  '/icons/techstack/编组-7.svg',
  '/icons/techstack/All.svg',
  '/icons/techstack/angular-icon 1.svg',
  '/icons/techstack/bunny-color 1.svg',
  '/icons/techstack/Ellipse 55.svg',
  '/icons/techstack/g3476.svg',
  '/icons/techstack/Group 1958.svg',
  '/icons/techstack/Group 2285.svg',
  '/icons/techstack/Group 2575.svg',
  '/icons/techstack/Group 2576.svg',
  '/icons/techstack/python.svg',
  '/icons/techstack/Group 3180.svg',
  '/icons/techstack/Group.svg',
  '/icons/techstack/java 1.svg',
  '/icons/techstack/js.svg',
]

const StackSlider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide-first">
          <Image src={'/icons/techstack/All.svg'} width='40px' height='40px' />
        </div>
        {icons.map((item, idx) => (
          <div className="slide" key={idx}>
            <Image src={item} width='40px' height='40px' />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackSlider