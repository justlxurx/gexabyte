import Image from 'next/image'
import React from 'react'
import {allLogo} from "@public/icons/techstack/test";
import {allIcon} from "@public/icons";

const StackSlider = () => {
  return (
    <div className={"slider"}>
      <div className={"slider-track"}>
        <div className={"slide-first"}>
          <Image src={allIcon} width={40} height={40} alt={'AllIcons'} />
        </div>
        {allLogo.map((item, idx) => (
          <div className={"slide"} key={idx}>
            <Image src={item} width={40} height={40} alt={`image${idx}`} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StackSlider
