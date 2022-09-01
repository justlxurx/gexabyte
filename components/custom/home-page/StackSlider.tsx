import Image from 'next/image'
import React from 'react'

const StackSlider = () => {
  return (
    <div className="slider">
      <div className="slider-track">
        <div className="slide-first">
          <Image src={'/icons/kotlin.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/etherium.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/js.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/ruby.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/kotlin.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/etherium.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/js.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/ruby.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/kotlin.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/etherium.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/js.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/ruby.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/kotlin.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/etherium.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/js.svg'} width='40px' height='40px' />
        </div>
        <div className="slide">
          <Image src={'/icons/ruby.svg'} width='40px' height='40px' />
        </div>
      </div>
    </div>
  )
}

export default StackSlider