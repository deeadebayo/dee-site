import { motion } from 'framer-motion';
import React from 'react';
import { css } from "@emotion/react";
import { useInView } from 'react-intersection-observer'


const loaderStyles = css`
  .loader-inner {
    .image-block {
      position: absolute;
      transform-origin: center;
      display: flex;
      align-items: center;
      justify-content: center;
      &.image-1 {
        width: 400px;
        left: 16%;
        bottom: 14%;
        @media (max-width: $layout-breakpoint-xsmall) {
          left: 4%;
          bottom: 28%;
        }
      }
      &.image-3 {
        width: 300px;
        right: 12%;
        top: 8%;
        @media (max-width: $layout-breakpoint-xsmall) {
          top: 16%;
          right: 4%;
        }
      }
      &.image-4 {
        max-width: 400px;
        width: 40%;
        right: 20%;
        bottom: 10%;
        @media (max-width: $layout-breakpoint-xsmall) {
          right: 6%;
          bottom: 32%;
        }
      }
      &.image-5 {
        width: 280px;
        left: 14%;
        top: 12%;
        @media (max-width: $layout-breakpoint-xsmall) {
          left: 6%;
          top: 18%;
        }
      }
      img {
        width: 100%;
        object-fit: fill;
      }
    }
}

`
const Loader = ({ children, pageName }) => {
	//need to add a super uique key if multiple children

	const variants = {
		hidden: { y: 200, opacity: 0 },
		visible: {
			opacity: 1, y: 0, transition: {
				duration: 1.5
			}
		},
		exitOut: {
			y: -200, opacity: 0, transition: {
				duration: 3
			}
		}
	}
	return (
		<motion.div css={loaderStyles}
			key={pageName}
			onAnimationComplete={() => console.log(`completed animation`)}
			onAnimationStart={() => console.log(`animation started`)}
			initial='hidden'
			animate='visible'
			exit='exitOut'
			variants={variants}
		>
			{children}
		</motion.div>
	)
}

export default Loader
