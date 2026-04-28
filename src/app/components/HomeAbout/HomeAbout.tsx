import React from 'react'
import classNames from 'classnames'
import styles from './homeabout.module.scss'
import { ButtonLink } from '../Button/Button'

const HomeAbout = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper__about}>
        {/* <h1 className='about__title'>
                 <AnimatedTextHeading
                    whileHover={{ color: 'var(--color-secondary)' }}
                    initial={{ y: '100%', color: 'var(--color-secondary)' }}
                    animate='visible'
                    variants={animatedHelloVariants}
                >
                    Hi, I'm Adeolu!
                </AnimatedTextHeading>
            </h1> */}
        <p className={classNames(styles['lead-text'], 'about__lead-text', 'isCentered')}>
          I'm a full-stack web developer with a soft spot for UX/UI. My focus is creating
          interactive and accessible web experiences.
        </p>
        <p className="lead-text about__lead-text isCentered">
          Thanks for visiting. It's nice to meet you!
        </p>
        <div className="about__learn-more">
          <ButtonLink text="About me" url="/about" />
          <p className="lead-text about__lead-text">
            <a href="#contact" className="about-link about__link">
              Get in touch
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeAbout

// import '../scss/link-hover.scss'
// import { ButtonLink } from '../components-ui/Button'
// import AnimatedTextHeading from '../components-ui/AnimatedTextHeading'

// const animatedHelloVariants = {
//     visible: i => ({
//         y: 0,
//         color: 'var(--color-text-header)',
//         transition: {
//             delay: i * 0.1,
//         },
//     }),
// }
