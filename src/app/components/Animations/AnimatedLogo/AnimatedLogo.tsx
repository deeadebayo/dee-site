'use client'

import React, { useState } from 'react'

import Logo from './../../../_misc/logo.svg'
import './animatedLogo.modules.scss'

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
  return <Logo className={`logo ${color}`} onMouseEnter={() => addClass()} />
}

export default AnimatedLogo
