'use client'

import React, { useState } from 'react'

import Logo from './../../../_misc/logo.svg'
import './animatedLogo.module.scss'

let colorClassOptions = ['logoPrimaryColor', 'logoSecondaryColor', 'logoAccentColor']

const AnimatedLogo = () => {
  const [color, setColor] = useState(''),
    [currentColor, setCurrentColor] = useState('logoPrimaryColor')

  let colorClassChoice = () =>
      colorClassOptions[Math.floor(Math.random() * colorClassOptions.length)],
    randomColor = () => colorClassChoice(),
    addClass = () => {
      let newColor = randomColor()
      setCurrentColor(newColor)
      setColor(currentColor)
    }
  return (
    <Logo
      className={`logo ${color}`}
      onMouseEnter={() => addClass()}
      width="130"
      height="66.912"
      viewBox="0 0 125.474 62.73"
    />
  )
}

export default AnimatedLogo
