import React from 'react'
import styles from './footer.module.scss'
// import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="page-wrapper--footer">
      My footer with my todos:
      <ul>
        <li>add struture of about page</li>
        <li>design footer</li>
        <li>popover api for light/dark mode option for users</li>
        <li>dialog api for contact us form</li>
        <li>
          scroll driven animation to replace framer -
          https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Scroll-driven_animations
        </li>
      </ul>
      <p>This site is free content: --link to about page anchor</p>
    </footer>
  )
}

export default Footer
