import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import AnimatedLogo from '../Animations/AnimatedLogo/AnimatedLogo'
import Navlinks from './Navlinks'

const Navbar = () => {
  return (
    <header className={`${styles.navbar} page-wrapper--header content-wrapper`}>
      <div className="navbar__logo">
        <Link href="/" className="logo--wrap" id="logo">
          <AnimatedLogo />
        </Link>
      </div>
      <Navlinks />
    </header>
  )
}

export default Navbar
