import React, { useState } from 'react'

import Logo from './../../../_misc/logo.svg'
// import './../scss/logo.scss'

let colorClassOptions = ['logo--primaryColor', 'logo--secondaryColor', 'logo--accentColor']

const AnimatedLogo = () => {
  const [color, setColor] = useState(''),
    [currentColor, setCurrentColor] = useState('logo--primaryColor')

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
