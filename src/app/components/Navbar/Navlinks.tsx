'use client'

import React from 'react'
import styles from './navbar.module.scss'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Navlinks = () => {
  const pathname = usePathname()

  console.log(pathname)

  let navlinks = [
      {
        id: 1,
        title: 'About',
        href: '/about',
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
        href: 'http://deeadebayo.tumblr.com/',
        color: '#BC027F',
        externalUrl: true,
      },
    ],
    isActivePage = (url: string) => (url === pathname ? `active` : ``)

  return (
    <div className={styles.navbar__links}>
      <ul>
        {navlinks.map((link) => (
          <li key={link.id}>
            <Link
              href={link.href}
              className={!link.externalUrl && pathname == link.href ? `active` : ``}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Navlinks
