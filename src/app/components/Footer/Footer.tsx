'use client'

import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import AnimatedLogo from '../Animations/AnimatedLogo/AnimatedLogo'

const Navbar = () => {
  const pathname = usePathname(),
    domain = location.host

  let navlinks = [
      {
        id: 1,
        title: 'About',
        href: '/about/',
      },
      {
        id: 2,
        title: 'Contact',
        href: '#contact',
      },
      {
        id: 3,
        title: 'Just riffing',
        href: 'http://labs.deeadebayo.com/',
        externalUrl: true,
      },
      {
        id: 4,
        title: 'Inspiration',
        href: 'https://deeadebayo.tumblr.com/',
        color: '#BC027F',
        externalUrl: true,
      },
    ],
    isActivePage = (url: string) => (url === pathname ? `active` : `navbar-link`)

  return (
    <header className={styles.navbar}>
      <div className="navbar__logo">
        <Link href="/" className="logo--wrap" id="logo">
          <AnimatedLogo />
        </Link>
      </div>
      <div className={styles.navbar__links}>
        iamkate, free content - https://iamkate.com/ideas/free-content/
        <ul>
          {navlinks.map((link) => (
            <li key={link.id}>
              <Link
                href={link.href}
                className={!link.externalUrl ? isActivePage(domain + link.href) : ``}
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navbar
