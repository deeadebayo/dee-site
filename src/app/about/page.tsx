import React from 'react'
import styles from './aboutPage.module.scss'

const AboutPage = () => {
  return <div className={styles.page}></div>
}

export default AboutPage

// const AboutPage = () => (
//     <>
//         <MiniSEO
//             title='About Me'
//             description='Learn more about Dee and the freelance web development services he offers.'
//         />
//         <FadeInPage pageName='about'>
//             <motion.div
//                 css={AboutPageStyles}
//                 variants={contentVariants}
//                 initial='hidden'
//                 animate='show'
//             >
//                 <motion.div className='header' variants={titleVariants}>
//                     <h1>
//                         full-stack developer
//                         <br />
//                         <span className='and'>&</span> web consultant
//                     </h1>
//                     {/* <p>
//                         description underneath. I help my clients define their
//                         online footprint - creating web experiences that balance
//                         business and user needs.
//                     </p> */}
//                 </motion.div>
//                 <motion.div
//                     className='resume'
//                     variants={textContentVariants}
//                     key='resumeText'
//                 >
//                     <div className='resume__experience'>
//                         <h2>Hi, my name is Adeolu!</h2>
//                         <p>
//                             I live in {` `}
//                             <a
//                                 href='https://www.lonelyplanet.com/usa/the-south/atlanta'
//                                 target='_blank'
//                                 className='about-page'
//                             >
//                                 Atlanta
//                             </a>
//                             {` `}
//                             <span>🍑</span> working as a freelance developer.
//                         </p>
//                         <p>
//                             Since 2014, I've enjoyed using modern tools to build accessible
//                             sites that function seamlessly on anything that can access the
//                             web.
//                         </p>
//                         <p>
//                             While just the web dev part of projects can be super fun, I like
//                             all the other pieces that go into it too (looking at you: SEO 😍
//                             and design systems 😎).
//                         </p>
//                         <p>
//                             If the project involves HTML/CSS/JS, chances are high that I'll
//                             love working on it. Have a project in mind?{' '}
//                             <Link to='#contact' className='about-page'>
//                                 Contact me
//                             </Link>
//                         </p>
//                     </div>
//                 </motion.div>
//                 <motion.div
//                     className='skills'
//                     variants={textContentVariants}
//                     key='skilsText'
//                 >
//                     <div className='skills__toolbox'>
//                         <h2>Toolbox</h2>
//                         <p>
//                             HTML, CSS, JavaScript, Node.js, React.js, Gatsby.js, Jamstack,
//                             GraphQL, PostgreSQL
//                         </p>
//                     </div>
//                     <div className='skills__specialities'>
//                         <h2>Specialities</h2>
//                         <p>
//                             Responsive web design, Branding, UI/UX wireframing, Usability
//                             testing, Digital marketing, Analytics & SEO, Ecommerce, and all
//                             the things!
//                         </p>
//                     </div>
//                 </motion.div>
//             </motion.div>
//         </FadeInPage>
//     </>
// )

// export default AboutPage
// export const Head = () => <SEO />
