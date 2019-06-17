// console.warn(`yes, we're still good`);

const clickScroll = require('./modules/ClickScroll'),
	helloAnimation = require('./modules/HelloAnimation'),
	footerAnimation = require('./modules/Footer');

new helloAnimation();
new clickScroll();
new footerAnimation();
