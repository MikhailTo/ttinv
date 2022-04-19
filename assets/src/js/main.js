import '@babel/polyfill';
import General from './_generalScripts';
import Leaflet from './_initLeaflet';
import LinkTop from './_initLinkTop';
import ShrinkNav from './_shrinkNavigation';

const App = {

	/**
	 * App.init
	 */
	init() {
		// General scripts
		function initGeneral() {
			return new General();
		}
		initGeneral();

		// Map
		function initLeaflet() {
			return new Leaflet();
		}
		initLeaflet();

		// Link go to top of page
		function initLinkTop() {
			return new LinkTop();
		}

		function shrinkNav() {
			return new ShrinkNav();
		}

		window.onscroll = function () {
			initLinkTop();
			shrinkNav();
		};
	}
};

document.addEventListener('DOMContentLoaded', () => {
	App.init();
});
