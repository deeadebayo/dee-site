import React from 'react'
import Link from 'next/link'
import styles from './button.module.scss'

interface ButtonProps {
  text: string
}

const Button = ({ text }: ButtonProps) => (
  <div className={styles.btn}>
    <div className="pushable">
      <span className="shadow"></span>
      <span className="edge"></span>
      <span className="front">{text}</span>
    </div>
  </div>
)

interface ButtonLinkProps {
  text: string
  url: string
}

export const ButtonLink = ({ text, url }: ButtonLinkProps) => (
  <Link href={url}>
    <Button text={text} />
  </Link>
)

export default Button
