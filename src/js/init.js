import { defaults } from "./modules/defaults";
// import { forms } from "./modules/forms";
import { modals } from "./modules/modals";
import { button } from "./modules/button";
import { aos } from "./modules/aos";
import { config } from "./config";

var App = () => {};

App.prototype.init = () => {
	defaults.init();
	modals.init();
	button.init();
	aos.init();
	// Add event listener

	config.log('app init')
	
};

export { App };