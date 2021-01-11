import React from "react";

const AboutIndex = () => (
	<section className="content-wrapper content-wrapper__about-blurb">
		<div className="about-blurb">
			<div className="about-blurb__content">
				<p>Hello Animation Here</p>
				<p className="lead">I'm Adeolu</p>
				<p>
					I'm a front-end web developer focused on creating
					interactive and functional web experiences
				</p>
				<p>
					I'm originally from
					<a
						href="https://www.lonelyplanet.com/nigeria/lagos"
						target="_blank"
					>
						Lagos
						<img
							className="emoji"
							src="public/img/emoji__ng-flag.png"
							alt="Nigerian flag emoji"
						/>
					</a>
					but reside in
					<a
						href="https://www.lonelyplanet.com/usa/the-south/atlanta"
						target="_blank"
					>
						Atlanta
						<img
							src="public/img/emoji__peach.png"
							alt="peach emoji"
							className="emoji"
						/>
					</a>
					building static websites for small businesses.
				</p>
			</div>
		</div>
	</section>
);

export default AboutIndex;

// section.content-wrapper.content-wrapper__about-blurb
//                         .about-blurb
//                             .about-blurb__content
//                                 .hello-animation
//                                     ul.hello-animation__hellos
//                                         li Hello
//                                         li Hi
//                                         li Hola
//                                         li Heya
//                                         li Hiya
//                                         li What's up
//                                         li Hey there
//                                         li Whoa
//                                 p.lead I'm Adeolu!
//                                     span.p
//                                 p
//                                     | I'm a front-end UI/UX developer
//                                     //love web dev, one of major requirements for staying relevant is continously keep learning
//                                     br
//                                     | focused on creating interactive and functional web experiences.
//                                 p
//                                     | I'm originally from
//                                     | <a href="https://www.lonelyplanet.com/nigeria/lagos" target="_blank">Lagos</a>
//                                     img(src="public/img/emoji__ng-flag.png", alt="Nigerian flag emoji").emoji
//                                     | but reside in <a href="https://www.lonelyplanet.com/usa/the-south/atlanta" target="_blank">Atlanta</a>
//                                     img(src="public/img/emoji__peach.png", alt="peach emoji").emoji
//                                     | ,
//                                     br
//                                     | building static websites for small businesses.
//                                 p <a href="#footer">Say hello</a>, or keep exploring.
//                                 button.btn more about me
